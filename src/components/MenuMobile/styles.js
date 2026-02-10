import styled from "styled-components";
import bgImage from "../../images/maviAslan1.png";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;

  background: rgba(0, 0, 0, 0.57); /* 🔥 mais escuro */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 999;

  display: flex;
  .drawer {
    width: 70%;
    height: 100vh;

    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    border-right: 1px solid rgba(255, 253, 253, 0.12);

    box-shadow: 12px 0 40px rgba(0, 0, 0, 0.7);

    padding: 24px;
  }

  img {
    height: 85px;
    margin-bottom: px;
  }
  nav {
    border-top: 1px solid rgba(255, 253, 253, 0.18);
    display: flex;
    flex-direction: column;
    a {
      display: flex;
      align-items: first baseline;
      width: 100%;
      font-size: 16px;
      padding: 12px;
      text-decoration: none;
      border-radius: 12px;
      color: #f8fafcff;
      transition: 0.4s;
    }

    a:hover {
      cursor: pointer;
      transition: 0.4s;

      background: rgba(0, 200, 255, 0.33); /* 🔥 mais escuro */
    }
  }
`;
