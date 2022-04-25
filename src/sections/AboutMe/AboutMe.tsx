import { ProfileAvatar, Heading, TextArea } from "../../components";
import { Container, Content } from "./styledComponents";
import profileImage from "../../assets/profile.jpeg";

const AboutMe: React.FC = () => {
  return (
    <Container id="About">
      <Content>
        <Heading title="Noah Kessler" subtitle="Software Engineer" />
        <TextArea>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </TextArea>
      </Content>
      <ProfileAvatar radius={180} image={profileImage} />
    </Container>
  );
};

export default AboutMe;
