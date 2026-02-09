import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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

      &:hover {
        border-color: rgba(56, 182, 255, 0.45);

        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.08),
          0 0 0 1px rgba(56, 182, 255, 0.35),
          0 12px 30px rgba(0, 0, 0, 0.45);

        transform: translateY(-2px);
      }
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
