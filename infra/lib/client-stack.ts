import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MicroManiaClient } from "./constructs/MicroManiaClient";

export class ClientStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    new MicroManiaClient(this, "client", {
      domain: "aoe.cx",
      zoneId: "Z08280773DHMHUR6KDGGL",
      certArn: "arn:aws:acm:us-east-1:390772177583:certificate/5dc7585b-e6d4-4a86-bed9-fdc6172ac66f",
    });
  }
}
