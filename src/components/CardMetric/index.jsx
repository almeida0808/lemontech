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

export function CardMetric({ name, color, icon }) {
  return (
    <Container color={color}>
      <div>
        <h3>{name}</h3>

        <i class={nameIcon[icon]}></i>
      </div>

      <h1 id="value">R$ 63,38</h1>
    </Container>
  );
}
