import { SkillDetails } from "../../models/technologies";
import { TextArea } from "../TextArea";
import { Border, Container } from "./styledComponents";

interface SkillsProps {
  skills: SkillDetails[];
}

const Skill: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Container>
      {skills.map((skill) => {
        return (
          <Border>
            <TextArea>{skill.description}</TextArea>
          </Border>
        );
      })}
    </Container>
  );
};

export default Skill;
