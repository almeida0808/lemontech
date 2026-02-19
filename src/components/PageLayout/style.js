import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
  padding: 16px;

  #title {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 1075px) {
    margin-top: 0;
    overflow-y: auto;
    height: 100vh;
  }
`;
