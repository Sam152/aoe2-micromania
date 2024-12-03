#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ClientStack } from "../lib/client-stack";
import { ServerStack } from "../lib/server-stack";

const app = new cdk.App();

new ClientStack(app, "ClientStack", {
  env: { account: "390772177583", region: "us-east-2" },
});
new ServerStack(app, "UsEastServer", {
  env: { account: "390772177583", region: "us-east-2" },
  region: "us-east-2",
  account: "390772177583",
  zoneId: "Z08280773DHMHUR6KDGGL",
  apiDomain: "ap-south.aoe.cx",
  certArn: "arn:aws:acm:us-east-1:390772177583:certificate/4ec1d899-34f3-4146-a155-fd7462d904cc",
  apiKeypairName: "aoe-cx",
});
new ServerStack(app, "ApSouthServer", {
  env: { account: "390772177583", region: "ap-southeast-2" },
  region: "ap-southeast-2",
  account: "390772177583",
  zoneId: "Z08280773DHMHUR6KDGGL",
  apiDomain: "ap-south.aoe.cx",
  certArn: "arn:aws:acm:us-east-1:390772177583:certificate/4ec1d899-34f3-4146-a155-fd7462d904cc",
  apiKeypairName: "aoe-cx",
});
