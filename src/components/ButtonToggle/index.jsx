import { Container } from "./style";

export function Toggle({ isOn, onToggle }) {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </Container>
  );
}
