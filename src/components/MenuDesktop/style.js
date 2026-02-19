import bgImage from "../../images/bg-desktop.png";
import styled from "styled-components";

export const Container = styled.div`
  inset: 0;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6); /* 🔥 mais escuro */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 999;

  display: flex;

  .drawer {
    height: 100vh;
    width: 100%;

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.75)), url(${bgImage});

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    border-right: 1px solid rgba(255, 253, 253, 0.12);
    box-shadow: 12px 0 40px rgba(0, 0, 0, 0.47);

    transition: 2.3s;
    padding: 24px;
  }

  img {
    height: 100px;
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
