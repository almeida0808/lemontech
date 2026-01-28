import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  height: max-content;
  background: ${({ theme }) => theme.COLORS.GRADIENT_GREEN};

  i {
    padding-right: 8px;
  }
`;
