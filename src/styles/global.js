import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16;
    
}

body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
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
