import { ButtonDate } from "../ButtonDate";
import { Container } from "./styles";

export function CardGraphics({ title, subtitle, children }) {
  return (
    <Container>
      {subtitle ? (
        <div id="cabecalho">
          <div id="items">
            <i id="up" className="ph ph-trend-up"></i>
            <div id="title">
              <h3>{title}</h3>
              <span>{subtitle}</span>
            </div>
          </div>
          <ButtonDate />
        </div>
      ) : (
        <div id="cabecalho">
          <h3>{title}</h3>
        </div>
      )}

      {children}
    </Container>
  );
}
