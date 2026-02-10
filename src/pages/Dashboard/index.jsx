import { NewButton } from "../../components/NewButton";
import { CardMetric } from "../../components/CardMetric";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonDate } from "../../components/ButtonDate";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CardDashboard } from "../../components/CardDashboard";
import { GraphicLucroMensal } from "../../components/GraphicLucroMensal";
import { GraphicItemsMaisVendidos } from "../../components/GraphicItemsMaisVendidos";
import { GraphicEntregasRetirada } from "../../components/GraphicEntregasRetirada";
import { ItemCard } from "../../components/ItemsCard";
import { Toggle } from "../../components/ButtonToggle";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <div id="app">
        <section>
          <div id="title">
            <h1>Dashboard</h1>
            <span>Visão geral do seu négocio</span>
          </div>

          <div id="buttons">
            <ButtonIcon icon="itemsSold" name="Venda" />
            <div id="separator" />
            <ButtonDate />
            <div id="separator" />
            <ButtonIcon id="compra" icon="package" name="Produto" />
          </div>
          <div id="gastos-operacionais">
            <i class="ph ph-wallet"></i>
            <div id="title">
              <p>Incluir Gastos Operacionais no Lucro</p>
              <span>Subtrai despesas operacionais no lucro liquido</span>
            </div>
            <Toggle />
          </div>
        </section>

        <section id="cards">
          <CardMetric color="green" name="Lucro Líquido" icon="up" />
          <CardMetric color="blue" name="Total Vendido" icon="sales" />
          <CardMetric color="purple" name="Qtd. Vendida" icon="itemsSold" />
          <CardMetric color="orange" name="Ticket Médio" icon="ticket" />
          <CardMetric color="red" name="Custos de Produtos" icon="package" />
          <CardMetric
            color="red-safe"
            name="Gastos Operacionais"
            icon="percent"
          />
          <CardMetric color="green-safe" name="Margem Média" icon="wallet" />
        </section>

        <section id="grafics">
          <CardDashboard title={"Lucro Mensal"} subtitle={"Média: R$89/mês"}>
            <GraphicLucroMensal />
          </CardDashboard>

          <CardDashboard title={"Produtos mais vendidos"}>
            <GraphicItemsMaisVendidos />
          </CardDashboard>

          <CardDashboard title={"Vendas por Canal"}>
            <GraphicEntregasRetirada />
          </CardDashboard>
        </section>

        <section id="outras-infos">
          <CardDashboard class="vendas-recentes" title={"Vendas Recentes"}>
            <div>
              <ItemCard
                lucro={"45,00"}
                valor={"90,00"}
                title={"Planta Bonsai"}
                plataforma={"Facebook"}
                data={"08/02/2026"}
              />{" "}
              <ItemCard
                lucro={"25,00"}
                valor={"40,00"}
                title={"Celular E7 Plus"}
                plataforma={"Whatsapp"}
                data={"05/02/2026"}
              />{" "}
              <ItemCard
                lucro={"86,00"}
                valor={"155,00"}
                title={"Lavadora Portatil"}
                plataforma={"Facebook"}
                data={"01/02/2026"}
              />{" "}
              <ItemCard
                lucro={"45,00"}
                valor={"90,00"}
                title={"Planta Bonsai"}
                plataforma={"Facebook"}
                data={"08/02/2026"}
              />{" "}
              <ItemCard
                lucro={"25,00"}
                valor={"40,00"}
                title={"Celular E7 Plus"}
                plataforma={"Whatsapp"}
                data={"05/02/2026"}
              />{" "}
              <ItemCard
                lucro={"86,00"}
                valor={"155,00"}
                title={"Lavadora Portatil"}
                plataforma={"Facebook"}
                data={"01/02/2026"}
              />{" "}
              <ItemCard
                lucro={"45,00"}
                valor={"90,00"}
                title={"Planta Bonsai"}
                plataforma={"Facebook"}
                data={"08/02/2026"}
              />{" "}
              <ItemCard
                lucro={"25,00"}
                valor={"40,00"}
                title={"Celular E7 Plus"}
                plataforma={"Whatsapp"}
                data={"05/02/2026"}
              />{" "}
              <ItemCard
                lucro={"86,00"}
                valor={"155,00"}
                title={"Lavadora Portatil"}
                plataforma={"Facebook"}
                data={"01/02/2026"}
              />
            </div>
          </CardDashboard>
          <CardDashboard title={"Estoque"}>
            <div>
              <ItemCard
                title={"Lavadora Portatil"}
                categoria={"Utilidades"}
                unidades={"12"}
              />{" "}
              <ItemCard
                title={"Fone Bluetooth XT53"}
                categoria={"Fone"}
                unidades={"5"}
              />{" "}
              <ItemCard
                title={"Carrinho"}
                categoria={"Decoração"}
                unidades={"9"}
              />
              <ItemCard
                title={"Lavadora Portatil"}
                categoria={"Utilidades"}
                unidades={"12"}
              />{" "}
              <ItemCard
                title={"Fone Bluetooth XT53"}
                categoria={"Fone"}
                unidades={"5"}
              />{" "}
              <ItemCard
                title={"Carrinho"}
                categoria={"Decoração"}
                unidades={"9"}
              />
              <ItemCard
                title={"Lavadora Portatil"}
                categoria={"Utilidades"}
                unidades={"12"}
              />{" "}
              <ItemCard
                title={"Fone Bluetooth XT53"}
                categoria={"Fone"}
                unidades={"5"}
              />{" "}
              <ItemCard
                title={"Carrinho"}
                categoria={"Decoração"}
                unidades={"9"}
              />
              <ItemCard
                title={"Lavadora Portatil"}
                categoria={"Utilidades"}
                unidades={"12"}
              />{" "}
              <ItemCard
                title={"Fone Bluetooth XT53"}
                categoria={"Fone"}
                unidades={"5"}
              />{" "}
              <ItemCard
                title={"Carrinho"}
                categoria={"Decoração"}
                unidades={"9"}
              />
            </div>
          </CardDashboard>
        </section>
      </div>
    </Container>
  );
}
