import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  max-height: 60px;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.27);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-radius: 16px;

  box-shadow:
    inset 0 1px 0 rgba(0, 0, 0, 0.78),
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

  strong {
    font-size: 14px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  #title {
    display: flex;
    flex-direction: column;
  }

  #values {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    align-items: center;
    span {
      color: #21c45d;
      font-size: 12px;
    }
  }

  #quantidade {
    display: flex;
    align-items: center;
    p {
      color: #0084ffff;
      font-size: 14px;
      background-color: #63c4f132;
      padding: 4px;
      border-radius: 8px;
    }
  }
`;
