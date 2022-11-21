import React from 'react'

// Styles
import { Wrapper } from './Home.styles'
// Components
import  {Canvas} from '../../components/Canvas/'
import { ImageRotate } from '../../components/ImageRotate';
import { Banner } from "../../components/Banner"


const Home = () => {

  
  return (
    <Wrapper>
      <Banner />
      <ImageRotate />
    </Wrapper>
  );
}

export default Home