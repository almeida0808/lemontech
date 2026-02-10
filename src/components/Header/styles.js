import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(
    to bottom,
    rgba(11, 15, 26, 0.9),
    rgba(11, 15, 26, 0.6)
  );

  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: whitesmoke;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;

  grid-area: header;

  width: 100%;
  height: max-content;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(34, 47, 68);

  img {
    height: 75px;
  }

  button {
    border: none;
    background: none;
    margin-right: 24px;
    color: white;
  }
`;
