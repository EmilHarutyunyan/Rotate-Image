import { Wrapper } from "./Banner.styles";

const Banner = ({ title = "Image Rotator", desc = "Rotate Image Online" }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </Wrapper>
  );
};

export default Banner;
