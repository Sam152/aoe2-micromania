import { CfnOutput, Tags } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import {
  AmazonLinux2023ImageSsmParameter,
  InstanceClass,
  InstanceSize,
  InstanceType,
  KeyPair,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { DockerImageAsset, Platform } from "aws-cdk-lib/aws-ecr-assets";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Distribution, OriginProtocolPolicy, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";

type ServerProps = {
  region: string; // region: "ap-southeast-2",
  certArn: string; // Click ops only
  apiDomain: "foo.example.com";
  apiKeypairName: "mm-server";
  account: string;
};

export class Server extends Construct {
  private readonly id: string;
  private props: ServerProps;
  private image: DockerImageAsset;

  constructor(scope: Construct, id: string, props: ServerProps) {
    super(scope, id);
    this.id = id;
    this.props = props;

    this.buildContainer();

    // Deploy straight to EC2 as opposed to some container orchestration
    // system, because we require a single stateful server.
    this.deployContainerEc2();

    Tags.of(this).add("CostCenter", "Server");
  }

  deployContainerEc2() {
    const vpc = Vpc.fromLookup(this, "default-vpc", { isDefault: true });
    const securityGroup = new SecurityGroup(this, "mm-server-security-group", {
      vpc: vpc,
    });
    securityGroup.addIngressRule(Peer.anyIpv4(), Port.allTraffic());
    securityGroup.addEgressRule(Peer.anyIpv4(), Port.allTraffic());

    const instanceRole = new Role(this, "mm-server-instance-role", {
      assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
    });
    instanceRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName("AmazonDynamoDBFullAccess"));
    instanceRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName("AmazonEC2ContainerRegistryReadOnly"));

    const instance = new ec2.Instance(this, "mm-server-instance", {
      keyPair: KeyPair.fromKeyPairName(this, "tp-prod-keypair", this.props.apiKeypairName),
      instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.NANO),
      vpc: vpc,
      machineImage: new AmazonLinux2023ImageSsmParameter(),
      securityGroup: securityGroup,
      vpcSubnets: {
        subnetType: SubnetType.PUBLIC,
      },
      userData: this.buildInstanceUserData(),
      role: instanceRole,
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: ec2.BlockDeviceVolume.ebs(8),
        },
      ],
    });

    new Distribution(this, `mm-server-api-distribution`, {
      domainNames: [this.props.apiDomain],
      certificate: Certificate.fromCertificateArn(this, "tp-api-cert", this.props.certArn),
      defaultBehavior: {
        origin: new HttpOrigin(instance.instancePublicDnsName, {
          protocolPolicy: OriginProtocolPolicy.HTTP_ONLY,
        }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });

    new CfnOutput(this, "mm-server-kick-script", {
      value: `ssh -i ~/.ssh/tp-prod.pem ec2-user@${instance.instancePublicDnsName} sudo /var/lib/cloud/instance/scripts/part-001`,
    });
  }

  /**
   * Create a script to run on start-up to launch the service.
   */
  buildInstanceUserData(): UserData {
    const data = ec2.UserData.forLinux();
    data.addCommands(
      `yum install -y docker`,
      `systemctl start docker`,
      `aws ecr get-login-password --region ${this.props.region} | docker login --username AWS --password-stdin ${this.props.account}.dkr.ecr.${this.props.region}.amazonaws.com`,
      `docker system prune -a -f`,
      `docker pull ${this.image.imageUri}`,
      `docker container run -d -e --publish 80:80 --restart always ${this.image.imageUri}`,
    );
    return data;
  }

  buildContainer() {
    this.image = new DockerImageAsset(this, "mm-server-image", {
      directory: path.resolve(__dirname, "../../../"),
      file: "server.Dockerfile",
      platform: Platform.LINUX_AMD64,
    });
  }
}
