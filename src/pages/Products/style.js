import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas:
    "header"
    "content";

  color: white;

  #filtros {
    #search {
      margin-top: 18px;
      background: none;
      border: 1px solid rgba(43, 59, 85, 0.94);
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;

      input {
        background: none;
        border: none;
        color: white;
      }
    }
    #buttons-filters {
      margin-top: 8px;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      gap: 8px;
    }
  }

  @media (min-width: 1075px) {
    display: grid;
    grid-template-columns: 280px auto;
  }

  #app {
    margin-top: 90px;
    padding: 16px;
  }
`;
