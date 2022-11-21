
import { Wrapper } from "./Button.styles";
import React from 'react'

const Button = ({ cssName, logo, text, handleClick }) => {
  return (
    <Wrapper className={cssName} onClick={handleClick}>
      {logo}
      {text}
    </Wrapper>
  );
}

export default Button