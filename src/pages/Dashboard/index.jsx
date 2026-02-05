import { NewButton } from "../../components/NewButton";
import { CardMetric } from "../../components/CardMetric";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonDate } from "../../components/ButtonDate";
import { ButtonIcon } from "../../components/ButtonIcon";

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
            <ButtonIcon />
            <div id="separator" />
            <ButtonIcon />
            <div id="separator" />
            <ButtonIcon />
          </div>
          <div id="gastos-operacionais">
            <i class="ph ph-wallet"></i>
            <div>
              <p>Incluir Gastos Operacionais no Lucro</p>
              <span>Subtrai despesas operacionais no lucro liquido</span>
            </div>
            <button>on</button>
          </div>
        </section>

        <section id="cards">
          <CardMetric color="green" name="Lucro Líquido" icon="up" />
          <CardMetric color="blue" name="Total Vendido" icon="sales" />
          <CardMetric color="purple" name="Qtd. Vendida" icon="itemsSold" />
          <CardMetric color="orange" name="Ticket Médio" icon="ticket" />
          <CardMetric color="red" name="Custos de Produtos" icon="package" />
          <CardMetric color="red" name="Gastos Operacionais" icon="percent" />
          <CardMetric color="green" name="Margem Média" icon="wallet" />
        </section>

        <section id="grafics">
          <div id="evolucao-lucro">

            <div id="cabecalho">

              <div id="items">
                <i id="up" class="ph ph-trend-up"></i>
                <div id="title">
                  <h3>Evolução do Lucro</h3>
                  <span>Média: R$89/mês</span>
                </div>

              </div>
              <ButtonDate />
            </div>
            <div id="grafico-fake">
              <h1>TESTE</h1>
            </div>
          </div>

          <div id="vendas-vs-lucro">
            <h3>Vendas vs Lucro</h3>
            <div id="grafico-fake">
              <h1>TESTE</h1>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
