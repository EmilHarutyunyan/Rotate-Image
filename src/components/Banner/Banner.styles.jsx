import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: 100% 220px;
  background-repeat: repeat-x;
  text-align: center;
  padding: 95px 20px 20px 20px;

  & > h1 {
    color: #fff;
  }
  & > h2 {
    color: #fff;
    margin-top: 5px;
  }
`;
