export enum Technology {
  JS = "JavaScript",
  TS = "TypeScript",
  Lambda = "Lambda",
  SNS = "SNS",
  SQS = "SQS",
  DynamoDB = "DynamoDB",
  CDK = "CDK",
  NodeJS = "NodeJS",
}

export interface SkillDetails {
  /**
   * Description of the skill
   */
  description: string;

  /**
   * Technologies involved
   */
  technologies: {
    /**
     * Type of technology
     */
    technology: Technology;

    /**
     * Image of the technology
     */
    image: string;
  }[];
}
