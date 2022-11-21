// import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 78%;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   max-width: 1150px;
//   @keyframes blur {
//     0% {
//       -webkit-filter: blur(0px);
//       fill: blue(0px);
//     }
//     100% {
//       -webkit-filter: blur(10px);
//       filter: blur(10px);
//     }
//   }
//   @keyframes blur-none {
//     0% {
//       -webkit-filter: blur(10px);
//       fill: blue(10px);
//     }
//     100% {
//       -webkit-filter: blur(0px);
//       filter: blur(0px);
//     }
//   }
//   @media only screen and (max-width: 690px) {
//     margin-top: 90px;
//   }
//   .form-content {
//     width: 50%;
//     max-width: 430px;
//     position: relative;
//     padding: 0 15px;
//     animation: animateOpacityImage 1s;
//     @media only screen and (max-width: 690px) {
//       width: 100%;
//       max-width: 350px;
//       :first-child {
//         margin-bottom: 60px;
//       }
//     }
//     & .custom-btn {
//       margin-top: 30px;
//       display: block;
//       width: 100%;
//       height: 50px;
//       border: none;
//       outline: none;
//       font-size: 18px;
//       font-weight: 500;
//       letter-spacing: 1px;
//       text-transform: uppercase;
//       cursor: pointer;
//       background: transparent;
//       border: 2px solid #444444;
//     }
//     &-box {
//       position: relative;
//       border: 1px solid;
//       & .cancel-btn {
//         width: 100%;
//         height: 30px;
//         position: absolute;
//         font-size: 20px;
//         right: 15px;
//         top: 15px;
//         color: var(--monoGrayLight);
//         cursor: pointer;
//         /* display: none; */
//         z-index: 6;
//         text-align: right;
//       }
//       & .cancel-btn img {
//         display: none;
//         z-index: 2;
//         width: 30px;
//         height: 30px;
//         background-color: white;
//         /* display: inline-block; */
//       }
//       &.active:hover .cancel-btn img {
//         display: inline-block;
//         fill: var(--monoGray2);
//       }
//       & .cancel-btn img:hover {
//         fill: #000;
//       }
//       & .file-name {
//         position: absolute;
//         bottom: 0px;
//         width: 100%;
//         padding: 8px 0;
//         font-size: 18px;
//         color: #fff;
//         display: none;
//         text-align: center;
//         background: var(--monoGray);
//       }
//       &.active:hover .file-name {
//         display: block;
//       }
//       /* &.active {
//         border: none;
//       } */
//       &.active .content {
//         display: none;
//       }
//     }
//     &-img {
//       width: 100%;
//       min-height: 300px;
//       background: #fff;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       overflow: hidden;
//       @media only screen and (max-width: 690px) {
//         width: 100%;
//         min-height: 210px;
//       }
//       & .image {
//         position: absolute;
//         height: 100%;
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//       }
//       & img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//       & .icon {
//         font-size: 100px;
//         color: #9658fe;
//       }
//       &.text {
//         font-size: 20px;
//         font-weight: 500;
//         color: #5b5b7b;
//       }
//       &.active .content {
//         display: none;
//       }
//       & .content img {
//         display: block;
//         width: 150px;
//         height: auto;
//         margin: 0 auto;
//         object-fit: cover;
//       }
//     }
//   }
//   .form-content__style {
//     width: 100%;
//     max-width: 430px;
//     position: relative;
//     animation: animateOpacityImage 1s;
//     text-align: center;
//     @media only screen and (max-width: 690px) {
//       width: 100%;
//       max-width: 350px;
//       :first-child {
//         margin-bottom: 60px;
//       }
//     }
//     p {
//       padding-top: 8px;
//     }

//     & .custom-btn {
//       margin-top: 30px;
//       display: block;
//       width: 100%;
//       height: 50px;
//       border: none;
//       outline: none;
//       font-size: 18px;
//       font-weight: 500;
//       letter-spacing: 1px;
//       text-transform: uppercase;
//       cursor: pointer;
//       background: transparent;
//       border: 2px solid #444444;
//     }
//     &-box {
//       position: relative;
//       border: 1px solid;
//       margin-top: 20px;
//       &:first-child {
//         margin-top: 0px;
//       }
//       & .cancel-btn {
//         width: 100%;
//         height: 30px;
//         position: absolute;
//         font-size: 20px;
//         right: 15px;
//         top: 15px;
//         color: var(--monoGrayLight);
//         cursor: pointer;
//         /* display: none; */
//         z-index: 6;
//         text-align: right;
//       }
//       & .cancel-btn img {
//         display: none;
//         z-index: 2;
//         width: 30px;
//         height: 30px;
//         background-color: white;
//         /* display: inline-block; */
//       }
//       &.active:hover .cancel-btn img {
//         display: inline-block;
//         fill: var(--monoGray2);
//       }
//       & .cancel-btn img:hover {
//         fill: #000;
//       }
//       & .file-name {
//         position: absolute;
//         bottom: 0px;
//         width: 100%;
//         padding: 8px 0;
//         font-size: 18px;
//         color: #fff;
//         display: none;
//         text-align: center;
//         background: var(--monoGray);
//       }
//       &.active:hover .file-name {
//         display: block;
//       }
//     }
//     &-img {
//       width: 100%;
//       min-height: 260px;
//       background: #fff;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       overflow: hidden;
//       @media only screen and (max-width: 690px) {
//         width: 100%;
//         min-height: 210px;
//       }
//       & .image {
//         position: absolute;
//         height: 100%;
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//       }
//       & img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//       & .icon {
//         font-size: 100px;
//         color: #9658fe;
//       }
//       &.text {
//         font-size: 20px;
//         font-weight: 500;
//         color: #5b5b7b;
//       }
//       &.active .content {
//         display: none;
//       }
//       & .content img {
//         display: block;
//         width: 150px;
//         height: auto;
//         margin: 0 auto;
//         object-fit: cover;
//       }
//     }
//     & .image {
//       position: absolute;
//       height: 80%;
//       width: 66%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       border: 1px solid;
//     }
//     & img {
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//     }
//     & .icon {
//       font-size: 100px;
//       color: #9658fe;
//     }
//     &.text {
//       font-size: 20px;
//       font-weight: 500;
//       color: #5b5b7b;
//     }
//     &.active .content {
//       display: none;
//     }
//     & .content img {
//       display: block;
//       width: 150px;
//       height: auto;
//       margin: 0 auto;
//       object-fit: cover;
//       animation: animateOpacityImage 1s;
//     }
//   }

//   .form-content .form-content__style-box {
//     position: relative;
//     border: 1px solid;
//   }
//   /* ------------------------- */
//   .inputFile {
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     overflow: hidden;
//     z-index: 5;
//     position: absolute;
//     cursor: pointer;
//   }

//   @media only screen and (max-width: 1440px) {
//     width: 66%;
//   }
//   @media only screen and (max-width: 992px) {
//     width: 100%;
//   }
//   @media only screen and (max-width: 690px) {
//     width: 100%;
//     justify-content: center;
//   }
// `;


import styled from "styled-components";

export const Wrapper = styled.div`
  .rotate {
    &_container {
      position: relative;
      display: flex;
      justify-content: space-between;
      background: #f2f2f2;
      border: 1px solid #d7d7d7;
      box-sizing: border-box;
      border-radius: 16px;
      gap: 33px;
      max-width: 980px;
      margin: 50PX  auto;
    }
    &_dropzone {
      width: 45%;
      height: 285px;
      margin: 16px 0 16px 16px;
      border-radius: 16px;
      &-content {
        display: flex;

        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        border: 1px dashed #a1a1a1;
        border-radius: 8px;
        height: 100%;
        text-align: center;

        span {
          margin: 20px 0;
        }
        svg {
          margin: 0 auto;
        }
      }
    }
    &_setings {
      width: 45%;
      &-content {
        position: relative;
        background: #fff;
        height: 100%;
        border-radius: 0 16px 16px 0;
        padding: 26px 24px 20px;
        & > p {
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
        }
        .buttons_rl {
          display: flex;
          column-gap: 25px;
          margin-top: 25px;
        }
      }
    }
  }
`;
