import { Container } from "./styles";

export function NewButton({ name }) {
  return (
    <Container>
      <i class="ph ph-plus"></i>
      {name}
    </Container>
  );
}
