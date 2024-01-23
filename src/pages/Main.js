import React from 'react';
import styled from 'styled-components';
import leftbg from '../assets/images/main-left_bg.jpg'
import rightbg from '../assets/images/main-right_bg.jpg'
import { motion } from "framer-motion";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #000;

  .title-box {
    font-size: 80px;
    font-weight: bold;
    color: #fff;
    /* font-family: 'Gasoek One', sans-serif; */
    /* font-family: 'Noto Sans KR', sans-serif; */
  }
`;

const mainVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function Main(props) {
  return (
    <MainContainer>
      <div className='title-box'>
        <h1>Wellcome</h1>
        <h1>환영합니다.</h1>
      </div>
    </MainContainer>
  );
}

export default Main;