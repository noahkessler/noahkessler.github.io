export enum Technology {
  JS = "JavaScript",
  TS = "TypeScript",
  Lambda = "Lambda",
  SNS = "SNS",
  SQS = "SQS",
  DynamoDB = "DynamoDB",
  CDK = "CDK",
}

export interface SkillDetails {
  description: string;
  technologies: Technology[];
}
