import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MicroManiaServer, ServerProps } from "./constructs/MicroManiaServer";
import { DockerImageAsset, Platform } from "aws-cdk-lib/aws-ecr-assets";
import * as path from "path";

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps & Omit<ServerProps, "container">) {
    super(scope, id, props);
    const container = new DockerImageAsset(this, "server-container", {
      directory: path.resolve(__dirname, "../../"),
      file: "server.Dockerfile",
      platform: Platform.LINUX_AMD64,
    });
    new MicroManiaServer(this, "server", {
      ...props,
      container,
    });
  }
}
