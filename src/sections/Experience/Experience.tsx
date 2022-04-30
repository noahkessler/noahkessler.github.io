import { ExpWidget } from "../../components";
import beem from "../../assets/experience/beem.svg";
import enboarder from "../../assets/experience/enboarder.svg";
import unsw from "../../assets/experience/unsw.svg";
import { Container, Header, HeaderContainer } from "./styledComponents";
import { ConnectingLine } from "../../components/ConnectingLine";

const Experience: React.FC = () => {
  return (
    <Container id="Experience">
      <HeaderContainer>
        <Header>Experience</Header>
      </HeaderContainer>
      <ExpWidget
        image={beem}
        jobTitle="Software Engineer"
        companyName="Beem"
        description=""
        flipped={false}
        timeframe="Sep 2021 - Present"
        imageBackgroundColor="#ffffff"
      />
      <ConnectingLine flipped={false} />
      <ExpWidget
        image={enboarder}
        jobTitle="Full Stack Developer"
        companyName="Enboarder"
        description=""
        flipped={true}
        timeframe="Apr 2019 - Sep 2021"
      />
      <ConnectingLine flipped={true} />
      <ExpWidget
        image={unsw}
        jobTitle="BSc. Computer Science"
        companyName="UNSW"
        description="Studied a Bachelor of Computer Science at UNSW. Learnt a range of computing fundamentals."
        flipped={false}
        timeframe="2017 - 2020"
        imageBackgroundColor="#FFE600"
      />
    </Container>
  );
};

export default Experience;
