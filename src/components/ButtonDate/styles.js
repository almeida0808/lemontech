import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  #dateButton {
    border: 1px solid rgba(43, 59, 85, 0.94);
    border-radius: 8px;
    padding: 8px 12px;
    height: max-content;
    background: none;
    color: white;

    i {
      font-size: 14px;
    }
  }

  #popUp {
    position: absolute;
    top: 48px;
    z-index: 100;

    button {
      background: none;
    }
  }
`;
