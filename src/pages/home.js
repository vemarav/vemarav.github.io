import styled from "styled-components";
import svg from "../images";

const Background = styled.div`
  height: 100vh;
  background-image: url(${svg.bg});
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

const Panel = styled.div`
  position: relative;
  width: 25%;
  height: calc(100vh * 0.8);
  left: 0px;
  top: 0px;

  background: linear-gradient(
    107.56deg,
    rgba(255, 255, 255, 0.48) 0%,
    rgba(255, 255, 255, 0.16) 100%
  );
  backdrop-filter: blur(60px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px 0px 0px 30px;
`;

const Header = styled.img`
  margin: auto;
  margin-top: 2rem;
  height: 150px;
  width: 150px;
  display: block;
`;

const Tile = styled.img`
  margin: 1.5rem auto;
  width: 150px;
  display: block;
`;

const Detail = styled.img`
  margin: auto;
  margin-top: 2rem;
  width: 160px;
  display: block;
`;

const Home = () => {
  return (
    <Background>
      <Glass>
        <Panel>
          <Header src={svg.header} alt={"Aravind Vemula"} />
          <Tile src={svg.flutter} alt="Flutter" />
          <Tile src={svg.reactNative} alt="React Native" />
          <Tile src={svg.rubyOnRails} alt="Ruby on Rails" />
          <Detail src={svg.detail} alt="aravind-detail" />
        </Panel>
      </Glass>
    </Background>
  );
};

export default Home;
