import { Container } from "./styles";

const nameIcon = {
  up: "ph ph-trend-up",
  sales: "ph ph-currency-dollar",
  itemsSold: "ph ph-shopping-cart",
  ticket: "ph ph-ticket",
  package: "ph ph-package",
  percent: "ph ph-percent",
  wallet: "ph ph-wallet",
};
export function ButtonIcon({ icon, name }) {
  return (
    <Container>
      <i class={nameIcon[icon]}></i>
      {name && <p>{name}</p>}
    </Container>
  );
}
