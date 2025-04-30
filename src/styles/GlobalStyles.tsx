import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Fonts
import OpenSansBold from '../assets/font/OpenSans-Bold.ttf';
import OpenSansSemiBold from '../assets/font/OpenSans-SemiBold.ttf';
import OpenSansExtraBold from '../assets/font/OpenSans-ExtraBold.ttf';
import OpenSansLight from '../assets/font/OpenSans-Light.ttf';
import OpenSansMedium from '../assets/font/OpenSans-Medium.ttf';
import OpenSansRegular from '../assets/font/OpenSans-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    img {
      -webkit-user-drag: none;
    };
    a {
      -webkit-user-drag: none;
    };
    select {
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    };
    strong{
      font-weight: bold;
    };
    em{
      font-style: italic;
    };
  };
  html {
    height: 100%;
  };
  body {
    box-sizing: border-box;
    min-height: 100%;
    line-height: 1;
    &::-webkit-scrollbar {
      display: none;
    };
  };
  #root {
    min-height: 100%;
  };
  a {
    color: inherit;
    text-decoration: none;
  };

  @font-face {
    font-family: OpenSans;
    font-weight: 300;
    src: url(${OpenSansLight}) format("truetype");
  };
  @font-face {
    font-family: OpenSans;
    font-weight: 400;
    src: url(${OpenSansRegular}) format("truetype");
  };
  @font-face {
    font-family: OpenSans;
    font-weight: 500;
    src: url(${OpenSansMedium}) format("truetype");
  };
  @font-face {
    font-family: OpenSans;
    font-weight: 600;
    src: url(${OpenSansSemiBold}) format("truetype");
  };
  @font-face {
    font-family: OpenSans;
    font-weight: 700;
    src: url(${OpenSansBold}) format("truetype");
  };
  @font-face {
    font-family: OpenSans;
    font-weight: 800;
    src: url(${OpenSansExtraBold}) format("truetype");
  };

  body {
    font-family: "OpenSans";
  };
`;

export default GlobalStyles;