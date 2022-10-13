import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {}

const Page2: React.FC<Props> = () => {
  return (
    <Page2Wrap>
      <div>이곳은 페이지 2입니다.</div>
      <Link to="/">
        <button type="button">홈으로</button>
      </Link>
    </Page2Wrap>
  );
};
export default Page2;
const Page2Wrap = styled.div`
  height: 100vh;
  background-color: #f6f6f6;
`;
