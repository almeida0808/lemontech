import styled from "styled-components";
import bgImage from "../../images/bg-desktop.png";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;

  background: rgba(0, 0, 0, 0.57); /* 🔥 mais escuro */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 999;

  display: flex;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};

  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);

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

    transition: 2.3s;
    padding: 24px;

    transform: ${({ $open }) =>
      $open ? "translateX(0)" : "translateX(-100%)"};

    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  img {
    height: 85px;
    margin-bottom: px;
  }
  nav {
    border-top: 1px solid rgba(255, 253, 253, 0.18);
    display: flex;
    flex-direction: column;

    a:hover {
      cursor: pointer;
      transition: 0.4s;

      background: rgba(0, 200, 255, 0.33); /* 🔥 mais escuro */
    }
  }
`;
