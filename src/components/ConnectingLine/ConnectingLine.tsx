import { Container, Line } from "./styledComponents";
import line from "../../assets/line.svg";

interface ConnectingLineProps {
  /**
   * Default direction is top-left to bottom-right.
   * Flipped will change the direction from top-right to bottom-left.
   */
  flipped: boolean;
}

const ConnectingLine: React.FC<ConnectingLineProps> = ({ flipped }) => {
  return (
    <Container>
      <Line src={line} flipped={flipped} />
    </Container>
  );
};

export default ConnectingLine;
