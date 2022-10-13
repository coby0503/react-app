import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <HomeWrap>
      <div>안녕하세요 여기는 홈입니당~?</div>
      <Link to="/page1">
        <button type="button">page1</button>
      </Link>
      <Link to="/page2">
        <button type="button">page2</button>
      </Link>
      <Link to="/page3">
        <button type="button">page3</button>
      </Link>
    </HomeWrap>
  );
};
export default Home;

const HomeWrap = styled.div`
  height: 100vh;
  background-color: #f3a000;
`;
