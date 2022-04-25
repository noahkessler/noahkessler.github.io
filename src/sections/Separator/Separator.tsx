import { DownArrow } from "../../components";
import { Container } from "./styledComponents";

interface SeparatorProps {
  onClick: () => void;
}

const Separator: React.FC<SeparatorProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <DownArrow />
    </Container>
  );
};

export default Separator;
