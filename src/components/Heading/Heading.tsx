import { Container, Subtitle, Title } from "./styledComponents";

interface HeadingProps {
  /**
   * Title text
   */
  title: string;

  /**
   * Subheading text
   */
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Heading;
