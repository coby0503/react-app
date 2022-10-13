import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {}

const Page3: React.FC<Props> = () => {
  return (
    <Page3Wrap>
      <div>이곳은 페이지 3입니다.</div>
      <Link to="/">
        <button type="button">홈으로</button>
      </Link>
    </Page3Wrap>
  );
};
export default Page3;

const Page3Wrap = styled.div`
  height: 100vh;
  background-color: #009d23;
`;
