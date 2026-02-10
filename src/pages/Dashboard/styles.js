import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas:
    "header"
    "content";

  color: white;

  #app {
    margin-top: 90px;
    padding: 0 16px;

    #title {
      margin-bottom: 12px;
    }

    #buttons {
      display: flex;
      margin-bottom: 24px;
      justify-content: space-around;

      margin-top: 24px auto 24px;

      button:nth-child(1) {
        color: #22c55e;
      }
      button:nth-child(1):hover {
        background-color: #22c55e2c;
        transition: 0.3s;
        cursor: pointer;
      }

      #dateButton:hover {
        background-color: white;
      }

      button:nth-child(5) {
        color: #0084ffff;
      }

      #dateButton:hover,
      button:nth-child(5):hover {
        transition: 0.3s;
        background-color: #0084ff3c;
        cursor: pointer;
      }

      #separator {
        border-left: 1px solid rgba(43, 59, 85, 0.35);
      }
    }

    #gastos-operacionais {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 24px;

      padding: 16px;

      border: 1px solid rgba(43, 59, 85, 0.83);
      border-radius: 12px;

      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;

      padding: 20px;
      color: #f8fafc;

      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 0 0 rgba(56, 182, 255, 0);

      transition: all 0.3s ease;
      margin-bottom: 18px;

      i {
        margin-right: 8px;
        color: #3c83f6ff;
        font-size: 20px;
      }
      #title {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 0;
        p {
          line-height: 1.3;
          font-size: 14px;
        }
      }
    }

    #cards {
      div {
        margin-bottom: 18px;
      }
    }
  }

  #grafics {
    #grafico-fake {
      margin: 12px auto 0;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      width: 350px;
      height: 300px;
    }
    #evolucao-lucro {
      margin: 18px auto;
      border-radius: 12px;
      padding: 24px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      #cabecalho {
        display: flex;
        justify-content: space-between;
        #items {
          display: flex;
          align-items: center;
          #up {
            background-color: #21c45d33;
            font-size: 20px;
            color: #21c45d;

            padding: 8px;
            border-radius: 8px;
          }
          #title {
            margin: 0 0 0 10px;
            h3 {
              font-size: 18px;
            }
            span {
              font-size: 14px;
            }
          }
        }
      }
    }

    #vendas-vs-lucro {
      padding: 24px;
      border-radius: 12px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  #outras-infos {
    .vendas-recentes {
      background-color: red;
      height: 200px;
      overflow-y: auto; /* Adiciona rolagem vertical apenas quando necessário */
      border: 1px solid #ccc; /* Opcional: para visualizar o contêiner */
    }
  }
`;
