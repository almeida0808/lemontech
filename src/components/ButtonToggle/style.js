import styled from "styled-components";

export const Container = styled.div`
  .toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 30px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #444;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #3c83f6ff; /* verde */
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .switchText {
    font-size: 14px;
    color: #f3f3f3;
  }
`;
