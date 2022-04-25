import { technologies } from "../../assets/technologies";
import { Skills, Tech } from "../../components";
import { SkillDetails, Technology } from "../../models/technologies";
import {
  Container,
  SkillsContainer,
  TechContainer,
  Header,
} from "./styledComponents";

const formatTechnologies = (tech: Technology[]): SkillDetails["technologies"] =>
  tech.map((tech) => ({
    technology: tech,
    image: technologies[tech],
  }));

const skills: SkillDetails[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: formatTechnologies([(Technology.JS, Technology.TS)]),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: formatTechnologies([
      (Technology.TS, Technology.CDK, Technology.Lambda),
    ]),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: formatTechnologies([
      Technology.SQS,
      Technology.SNS,
      Technology.Lambda,
      Technology.CDK,
      Technology.DynamoDB,
    ]),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: formatTechnologies([]),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: formatTechnologies([]),
  },
];

const SkillsAndTech: React.FC = () => {
  return (
    <Container id="Skills&Tech">
      <SkillsContainer>
        <Header>Skills</Header>
        <Skills skills={skills} />
      </SkillsContainer>
      <TechContainer>
        <Header>Technologies</Header>
        <Tech technologies={technologies} />
      </TechContainer>
    </Container>
  );
};

export default SkillsAndTech;
