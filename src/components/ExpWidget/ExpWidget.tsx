import { useState } from "react";
import {
  Container,
  Description,
  Logo,
  Overview,
  OverviewText,
} from "./styledComponents";

interface ExpWidgetProps {
  /**
   * Image of the experience
   */
  image: string;

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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container
      flipped={flipped}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Logo className="logo" src={image} />
      <Overview isExpanded={isExpanded}>
        <OverviewText>{jobTitle}</OverviewText>
        <OverviewText>{timeframe}</OverviewText>
      </Overview>
      <Description className="description">{description}</Description>
    </Container>
  );
};

export default ExpWidget;
