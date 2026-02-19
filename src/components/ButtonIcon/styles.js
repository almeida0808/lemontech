import styled from "styled-components";

export const Container = styled.button`
  border: 1px solid rgba(43, 59, 85, 0.94);
  border-radius: 8px;
  padding: 8px 12px;
  height: 100%;
  width: 100%;
  color: white;
  justify-content: center;
  display: flex;
  gap: 8px;
  align-items: center;

  background: ${({ color, background }) => {
    if (background) {
      switch (color) {
        case "green":
          return " rgba(34,197,94,0.2)";
        case "blue":
          return "rgba(56,182,255,0.2)";
        case "purple":
          return "rgba(139,92,246,0.2)";
        case "orange":
          return "rgba(245,158,11,0.2)";
        case "red":
          return " rgba(239,68,68,0.2)";
        case "red-safe":
          return "rgba(251,113,133,0.2)";
        case "green-safe":
          return " rgba(34,197,94,0.2)";

        default:
          return "none";
      }
    } else {
      return "none";
    }
  }};

  i {
    margin-top: 0.5px;
    font-size: 14px;
  }
`;
