import { Paragraph } from "./styledComponents";
import { css } from "styled-components";

interface TextAreaProps {
  children: React.ReactNode;
}

const TextArea: React.FC<TextAreaProps> = ({ children }) => {
  return <Paragraph className="paragraph">{children}</Paragraph>;
};

export default TextArea;
