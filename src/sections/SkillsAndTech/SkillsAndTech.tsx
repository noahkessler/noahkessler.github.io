import { Skills } from "../../components";
import { SkillDetails } from "../../models/technologies";
import {
  Container,
  SkillsContainer,
  TechContainer,
  Header,
} from "./styledComponents";

const skills: SkillDetails[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [],
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [],
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [],
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
      </TechContainer>
    </Container>
  );
};

export default SkillsAndTech;
