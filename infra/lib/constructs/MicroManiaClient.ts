import { aws_s3_deployment, BundlingOptions, DockerImage, RemovalPolicy, Tags } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, BucketEncryption, ObjectOwnership } from "aws-cdk-lib/aws-s3";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import { spawnSync } from "child_process";
import * as path from "path";
import {
  CachePolicy,
  CacheQueryStringBehavior,
  Distribution,
  ResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Duration } from "aws-cdk-lib/core";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

type ClientProps = {
  domain: string;
  certArn: string;
  socketHost: string;
  zoneId: string;
};

export class MicroManiaClient extends Construct {
  private props: ClientProps;
  private readonly resolveRoot: (input: string) => string;
  private bucket: Bucket;

  constructor(scope: Construct, id: string, props: ClientProps) {
    super(scope, id);
    this.props = props;

    this.resolveRoot = (input: string) => path.resolve(__dirname, "../../../", input);

    this.bucket = this.deployFrontEndToBucket();
    this.addCloudfrontDistribution();

    Tags.of(this).add("CostCenter", "Client");
  }

  deployFrontEndToBucket() {
    const bucket = new Bucket(this, this.getBucketName(), {
      versioned: false,
      bucketName: this.getBucketName(),
      encryption: BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      // This can be switched off, in cases where we only want access via the CF distribution, by configuring
      // an additional access relationship between CF and S3, however this also works fine.
      publicReadAccess: true,
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      eventBridgeEnabled: false,
      cors: [],
    });

    const stack = this;
    new aws_s3_deployment.BucketDeployment(this, "deployment", {
      destinationBucket: bucket,
      extract: true,
      sources: [
        aws_s3_deployment.Source.asset(this.resolveRoot(""), {
          bundling: {
            image: DockerImage.fromRegistry("node:22"),
            local: {
              tryBundle(outputDir: string, options: BundlingOptions): boolean {
                spawnSync(`npm ci && SOCKET_HOST=${stack.props.socketHost} npm run build-client-prod`, {
                  shell: true,
                  cwd: stack.resolveRoot(""),
                });
                spawnSync(`cp -a dist/* ${outputDir} && rm -rf out`, {
                  shell: true,
                  cwd: stack.resolveRoot(""),
                });
                return true;
              },
            },
          },
        }),
      ],
    });
    return bucket;
  }

  addCloudfrontDistribution() {
    const distro = new Distribution(this, `distro`, {
      domainNames: [this.props.domain],
      certificate: Certificate.fromCertificateArn(this, "cert", this.props.certArn),
      defaultBehavior: {
        origin: new S3Origin(this.bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: new ResponseHeadersPolicy(this, `${this.getBucketName()}-response-header-policy`, {
          customHeadersBehavior: {
            customHeaders: [
              {
                header: "Cache-Control",
                override: false,
                value: "max-age=60",
              },
            ],
          },
        }),
        cachePolicy: new CachePolicy(this, `${this.getBucketName()}-cache-policy`, {
          maxTtl: Duration.minutes(1),
          defaultTtl: Duration.minutes(1),
          queryStringBehavior: CacheQueryStringBehavior.all(),
        }),
      },
      errorResponses: [
        {
          // Required, because dynamic routes will come back from S3 as a 404, we then use the 404 document
          // to internally route to the correct place.
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
        },
      ],
      // In the future, add additional behaviour that caches hashed assets for longer.
      additionalBehaviors: {},
    });

    new route53.ARecord(this, "distro-a", {
      zone: route53.HostedZone.fromHostedZoneId(this, "zone", this.props.zoneId),
      recordName: this.props.domain,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
    });
  }

  getBucketName(): string {
    return `micromania-client-bucket-5f296a3df`;
  }
}
