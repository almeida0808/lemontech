import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-bottom: 18px;

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
