import { createGlobalStyle } from "styled-components";
import bgImage from "../images/maviAslan1.png";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16;
    
}

body{
  background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

}

 body::before {
    content: "";
    position: fixed;
    inset: 0;

    background: rgba(11, 15, 26, 0.09); /* #0b0f1a com opacidade */
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
