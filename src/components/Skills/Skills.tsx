import { useState } from "react";
import { SkillDetails } from "../../models/technologies";
import { TextArea } from "../TextArea";
import { Border, Container, TechContainer } from "./styledComponents";
import { technologies } from "../../assets/technologies";

interface SkillsProps {
  /**
   * List of skills to populate the component
   */
  skills: SkillDetails[];
}

const Skill: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState(-1);

  return (
    <Container>
      {skills.map((skill, index) => {
        return (
          <Border
            key={index}
            onClick={() =>
              selectedSkill !== index
                ? setSelectedSkill(index)
                : setSelectedSkill(-1)
            }
            isSelected={selectedSkill === index}
          >
            <TextArea>{skill.description}</TextArea>
            <TechContainer isSelected={selectedSkill === index}>
              {skill.technologies.map((tech) => (
                <img key={tech.technology} src={tech.image} />
              ))}
            </TechContainer>
          </Border>
        );
      })}
    </Container>
  );
};

export default Skill;
