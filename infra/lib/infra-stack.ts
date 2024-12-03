import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MicroManiaClient } from "./constructs/MicroManiaClient";
import { MicroManiaServer } from "./constructs/MicroManiaServer";
import { DockerImageAsset, Platform } from "aws-cdk-lib/aws-ecr-assets";
import * as path from "path";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    // Deploy the client.
    new MicroManiaClient(this, "client", {
      domain: "aoe.cx",
      zoneId: "Z08280773DHMHUR6KDGGL",
      certArn: "arn:aws:acm:us-east-1:390772177583:certificate/5dc7585b-e6d4-4a86-bed9-fdc6172ac66f",
      socketHost: "https://us-east.aoe.cx",
    });

    const serverContainer = new DockerImageAsset(this, "server-container", {
      directory: path.resolve(__dirname, "../../"),
      file: "server.Dockerfile",
      platform: Platform.LINUX_AMD64,
    });

    // Regional servers.
    new MicroManiaServer(this, "us-east", {
      account: "390772177583",
      zoneId: "Z08280773DHMHUR6KDGGL",
      apiDomain: "us-east.aoe.cx",
      region: "us-east-2",
      certArn: "arn:aws:acm:us-east-1:390772177583:certificate/6392c94f-f8f0-4e74-82dd-d1b9d9bed683",
      apiKeypairName: "aoe-cx",
      container: serverContainer,
    });
    new MicroManiaServer(this, "ap-south", {
      account: "390772177583",
      zoneId: "Z08280773DHMHUR6KDGGL",
      apiDomain: "ap-south.aoe.cx",
      region: "ap-southeast-2",
      certArn: "arn:aws:acm:us-east-1:390772177583:certificate/4ec1d899-34f3-4146-a155-fd7462d904cc",
      apiKeypairName: "aoe-cx",
      container: serverContainer,
    });
  }
}
