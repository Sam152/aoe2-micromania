import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Server } from "./constructs/Server";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Deploy the client.
    // @todo

    // Add as many regional servers as we'd like to support.
    new Server(this, "us-east-1-server", {});
  }
}
