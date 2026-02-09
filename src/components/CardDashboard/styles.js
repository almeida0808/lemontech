import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
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
  #children {
    max-height: 450px;
    overflow-y: auto;
  }

  #grafico-fake {
    margin: 12px auto 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 350px;
    height: 300px;
  }

  #cabecalho {
    margin-bottom: 12px;
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
`;
