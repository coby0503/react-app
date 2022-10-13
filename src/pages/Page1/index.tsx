import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {}

const Page1: React.FC<Props> = () => {
  return (
    <Page1Wrap>
      <div>이곳은 페이지 1입니다.</div>
      <Link to="/">
        <button type="button">홈으로</button>
      </Link>
    </Page1Wrap>
  );
};
export default Page1;
const Page1Wrap = styled.div`
  height: 100vh;
  background-color: #107eff;
`;
