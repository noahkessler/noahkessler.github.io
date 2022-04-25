import { Paragraph } from "./styledComponents";

interface TextAreaProps {
  children: React.ReactNode;
}

const TextArea: React.FC<TextAreaProps> = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default TextArea;
