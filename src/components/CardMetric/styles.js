import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  border-radius: 12px;
  height: max-content;

  background: ${({ theme, color }) => {
    switch (color) {
      case "purple":
        return theme.COLORS.GRADIENT_PURPLE;
      case "red":
        return theme.COLORS.GRADIENT_RED;
      case "blue":
        return theme.COLORS.GRADIENT_BLUE;
      case "orange":
        return theme.COLORS.GRADIENT_ORANGE;
      case "green":
      default:
        return theme.COLORS.GRADIENT_GREEN;
    }
  }};

  color: ${({ color }) => {
    switch (color) {
      case "orange":
      case "green":
        return "black";
      default:
        return "white";
    }
  }};

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
    h3 {
      font-weight: 500;
    }

    i {
      font-size: 20px;
      padding: 10px;
      border-radius: 12px;
      font-weight: 500;
      background: #0f17293d;
    }
  }
`;
