import { useCallback, useState } from "react";
import { Technology } from "../../models/technologies";
import {
  IconsContainer,
  SelectedLabel,
  TechContainer,
} from "./styledComponents";

interface TechProps {
  /**
   * Mapping of technology to image
   */
  technologies: Record<Technology, string>;
}

const Tech: React.FC<TechProps> = ({ technologies }) => {
  const [selectedIcon, setSelectedIcon] = useState<Technology | null>(null);

  const nothingSelected = useCallback(() => setSelectedIcon(null), []);

  console.log(selectedIcon);
  return (
    <TechContainer>
      <IconsContainer>
        {Object.values(Technology).map((tech) => (
          <img
            key={tech}
            src={technologies[tech]}
            onMouseEnter={() => setSelectedIcon(tech)}
            onMouseLeave={nothingSelected}
          />
        ))}
      </IconsContainer>
      <SelectedLabel color="white">{selectedIcon}</SelectedLabel>
    </TechContainer>
  );
};

export default Tech;
