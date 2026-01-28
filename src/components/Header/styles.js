import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: whitesmoke;
  text-align: center;

  grid-area: header;

  width: 100%;
  height: 60px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(34, 47, 68);
`;
