import { Technology } from "../../models/technologies";
import Lambda from "./lambda.svg";
import DynamoDB from "./dynamo.svg";
import JS from "./javascript.svg";
import TS from "./typescript.svg";
import NodeJS from "./nodejs.svg";
import CDK from "./cdk.svg";
import SQS from "./sqs.svg";
import SNS from "./sns.svg";

export const technologies: Record<Technology, string> = {
  [Technology.Lambda]: Lambda,
  [Technology.DynamoDB]: DynamoDB,
  [Technology.JS]: JS,
  [Technology.TS]: TS,
  [Technology.NodeJS]: NodeJS,
  [Technology.CDK]: CDK,
  [Technology.SQS]: SQS,
  [Technology.SNS]: SNS,
};
