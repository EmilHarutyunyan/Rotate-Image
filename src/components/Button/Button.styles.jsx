import styled from "styled-components";

export const Wrapper = styled.button`
  border: 0px;
  outline: 0px;
  background: transparent;
  cursor: pointer;
  &.btn_blue {
    font-size: 15px;
    line-height: 28px;
    max-width: 240px;
    justify-content: center;
    margin: 24px auto 0;
    color: #fff;
    background: #338fff;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 16px;
    padding: 6px 57px;
    &:hover {
      opacity: 0.7;
    }

    &.dow {
      position: absolute;
      bottom: 0;
      left: 10px;
      margin: 24px 0;
    }
  }

  &.rotate {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
`;
