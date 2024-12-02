import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MicroManiaServer } from "./constructs/MicroManiaServer";
import { DockerImageAsset, Platform } from "aws-cdk-lib/aws-ecr-assets";
import * as path from "path";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Deploy the client.
    // @todo
    // client cert arn: arn:aws:acm:us-east-2:390772177583:certificate/9553d752-255a-467a-87c7-1d4b76fa2c53

    // Create as many regional servers as required.
    new MicroManiaServer(this, "us-east", {
      account: "390772177583",
      apiDomain: "us-east.aoe.cx",
      region: "us-east-2",
      certArn: "arn:aws:acm:us-east-2:390772177583:certificate/0f4459c1-7dcd-42ec-aeaf-6795c4472840",
      apiKeypairName: "aoe-cx",
      container: new DockerImageAsset(this, "server-container", {
        directory: path.resolve(__dirname, "../../"),
        file: "server.Dockerfile",
        platform: Platform.LINUX_AMD64,
      }),
    });
  }
}
