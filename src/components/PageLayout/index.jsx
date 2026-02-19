import { ButtonIcon } from "../ButtonIcon";
import { Container } from "./style";

export function PageLayout({ title, subtitle, children, actions }) {
  return (
    <Container>
      <section>
        <div id="title">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>

        {actions && <div id="buttons">{actions}</div>}
      </section>

      {children}
    </Container>
  );
}
