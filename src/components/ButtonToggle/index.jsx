import { useState } from "react";
import { Container } from "./style";

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
        <span className="slider round"></span>
      </label>
    </Container>
  );
}
