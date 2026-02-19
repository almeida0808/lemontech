import { createGlobalStyle } from "styled-components";
import bgImage from "../images/bg-desktop.png";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  position: relative;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  z-index: -2;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;

  background: rgba(11, 15, 26, 0.09);
  z-index: -1;
}

body,input,button,textarea{
    font-family: "Inter", sans-serif;
    font-size: 16px;
    outline: none;
}

span {
    color: #94a3b8;
    font-size: 12px;

    strong{
        color: #fff;
        font-size: 14px;
    }
  }

a{
    text-decoration: none;
}
`;
