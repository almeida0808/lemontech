import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  height: max-content;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;

  padding: 20px;
  color: #f8fafcff;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 0 0 rgba(56, 182, 255, 0);

  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(56, 182, 255, 0.45);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 0 0 1px rgba(56, 182, 255, 0.35),
      0 12px 30px rgba(0, 0, 0, 0.45);

    transform: translateY(-2px);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 500;
      color: #b7c1ccff;
    }

    i {
      font-size: 20px;
      padding: 10px;
      border-radius: 12px;
      font-weight: 500;
      background: ${({ color }) => {
        switch (color) {
          case "green":
            return " rgba(34,197,94,0.10)";
          case "blue":
            return "rgba(56,182,255,0.10)";
          case "purple":
            return "rgba(139,92,246,0.10)";
          case "orange":
            return "rgba(245,158,11,0.10)";
          case "red":
            return " rgba(239,68,68,0.10)";
          case "red-safe":
            return "rgba(251,113,133,0.10)";
          case "green-safe":
            return " rgba(34,197,94,0.10)";

          default:
            return "white";
        }
      }};

      color: ${({ color }) => {
        switch (color) {
          case "green":
            return "#22c55e";
          case "blue":
            return "#0084ffff";
          case "purple":
            return "#8b5cf6";
          case "orange":
            return "#f59e0b";
          case "red":
            return "#ef4444";
          case "red-safe":
            return "#b3021cff";
          case "green-safe":
            return "#4ade80";

          default:
            return "white";
        }
      }};
    }
  }
`;
