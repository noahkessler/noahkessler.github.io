import { useState } from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Description,
  Logo,
  LogoContainer,
  Overview,
  OverviewText,
} from "./styledComponents";

interface ExpWidgetProps {
  /**
   * Image of the experience
   */
  image: string;

  /**
   * Image background color - defaults to theme background
   */
  imageBackgroundColor?: string;

  /**
   * Flipped - is the experience flipped (right to left)
   */
  flipped: boolean;

  /**
   * Name of the job title
   */
  jobTitle: string;

  /**
   * Name of the company
   */
  companyName: string;

  /**
   * Dates active at the experience
   * e.g. April 2020 - September 2022
   */
  timeframe: `${string} - ${string}`;

  /**
   * Description of the experience
   */
  description: string;
}

const ExpWidget: React.FC<ExpWidgetProps> = ({
  image,
  flipped,
  description,
  companyName,
  jobTitle,
  timeframe,
  imageBackgroundColor,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container
      flipped={flipped}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <LogoContainer
        className="logo"
        imageBackgroundColor={imageBackgroundColor || theme.palette.background}
        withBorder={!imageBackgroundColor}
      >
        <Logo src={image} />
      </LogoContainer>
      <Overview isExpanded={isExpanded}>
        <OverviewText>{jobTitle}</OverviewText>
        <OverviewText>{timeframe}</OverviewText>
      </Overview>
      <Description className="description">{description}</Description>
    </Container>
  );
};

export default ExpWidget;
