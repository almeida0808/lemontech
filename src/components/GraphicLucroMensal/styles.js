import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  /* REMOVE FOCO DO SVG */
  svg {
    outline: none;
  }

  /* REMOVE FOCO AO CLICAR */
  *:focus {
    outline: none;
  }
`;
