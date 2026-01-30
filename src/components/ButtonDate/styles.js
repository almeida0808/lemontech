import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  #dateButton {
    padding: 8px 12px;
    border-radius: 8px;
    background: #1f2937;
    color: #fff;
    border: 1px solid #374151;
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
