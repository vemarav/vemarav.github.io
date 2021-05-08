import styled from "styled-components";
import bgSvg from "../images/bg.svg";

const Background = styled.div`
  height: 100vh;
  background-image: url(${bgSvg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Glass = styled.div`
  width: 900px;
  height: calc(100vh * 0.8);
  background-color: #ffffff;
  border-radius: 2rem;
  background: linear-gradient(
    107.56deg,
    rgba(255, 255, 255, 0.36) 0%,
    rgba(255, 255, 255, 0.12) 100%
  );
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(60px);
  /* Note: backdrop-filter has minimal browser support */
  display: flex;
`;

// const Panel = styled.div``;

const Home = () => {
  return (
    <Background>
      <Glass></Glass>
    </Background>
  );
};

export default Home;
