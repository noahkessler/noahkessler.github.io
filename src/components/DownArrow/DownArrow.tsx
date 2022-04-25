import { Container } from "./styledComponents";

const DownArrow: React.FC = () => {
  return (
    <Container>
      <svg
        width="76"
        height="42"
        viewBox="0 0 76 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="4.94975"
          y1="4"
          x2="38"
          y2="37.0503"
          stroke="#EFF4FC"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <line
          x1="38"
          y1="37.0503"
          x2="71.0503"
          y2="4"
          stroke="#EFF4FC"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </Container>
  );
};

export default DownArrow;
