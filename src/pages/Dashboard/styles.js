import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-rows: 80px auto;
  grid-template-areas:
    "header"
    "content";

  color: white;

  #app {
    padding: 0 16px;

    #title {
      margin-bottom: 24px;
    }

    #buttons {
      display: flex;
      justify-content: space-around;
      margin-bottom: 24px;
      button:nth-child(1) {
        border: none;
        color: #21c45d;
        i {
          font-size: 22px;
        }
      }

      #separator {
        border-left: 1px solid rgba(43, 59, 85, 0.35);
      }
    }

    #gastos-operacionais {
      display: flex;
      align-items: center;

      margin-bottom: 24px;

      padding: 16px;

      border: 1px solid rgba(43, 59, 85, 0.83);
      border-radius: 12px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      i {
        margin-right: 8px;
        color: #21c45d;
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }

      button {
        border: none;
        border-radius: 12px;
        width: 64px;
        background: #21c45d;
      }
    }

    #cards {
      div {
        margin-bottom: 18px;
      }
    }
  }

  #grafics {
    #evolucao-lucro {
      #cabecalho {
        display: flex;

        #up {
          background-color: #21c45d33;
          font-size: 20px;
          color: #21c45d;

          padding: 8px;
          border-radius: 8px;
          margin-right: 12px;
        }

        strong {
          font-size: 18px;
          margin-bottom: 10px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;
