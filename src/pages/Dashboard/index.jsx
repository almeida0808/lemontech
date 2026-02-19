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
import { useEffect, useState } from "react";
import { Sidebar } from "lucide-react";
import { MenuDesktop } from "../../components/MenuDesktop";
import { startOfDay, endOfDay } from "date-fns";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1075);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1075);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
}

export function Dashboard() {
  const isDesktop = useIsDesktop();
  const [isOperatingExpenses, setIsOperatingExpenses] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
      key: "selection",
    },
  ]);

  return (
    <Container>
      {isDesktop ? <MenuDesktop /> : <Header />}

      <div id="app">
        <section>
          <div id="title">
            <div id="dashboardName">
              <h1>Dashboard</h1>
              <span>Visão geral do seu négocio</span>
            </div>
            {isDesktop && (
              <div id="buttons">
                <ButtonIcon icon="itemsSold" name="Nova Venda" />
                <ButtonIcon id="compra" icon="package" name="Novo Produto" />
                <ButtonDate
                  isDesktop={isDesktop}
                  ranges={dateRange}
                  setRanges={setDateRange}
                />
              </div>
            )}
          </div>

          {!isDesktop && (
            <div id="buttons">
              <ButtonIcon icon="itemsSold" name="Venda" />
              <div id="separator" />
              <ButtonDate
                isDesktop={isDesktop}
                ranges={dateRange}
                setRanges={setDateRange}
              />
              <div id="separator" />
              <ButtonIcon id="compra" icon="package" name="Produto" />
            </div>
          )}

          <div id="gastos-operacionais">
            <i className="ph ph-wallet"></i>
            <div id="title">
              <p>Incluir Gastos Operacionais no Lucro</p>
              <span>Subtrai despesas operacionais no lucro liquido</span>
            </div>
            <Toggle
              isOn={isOperatingExpenses}
              onToggle={() => setIsOperatingExpenses((prev) => !prev)}
            />
          </div>
        </section>

        <section id="cards">
          <CardMetric color="green" name="Lucro Líquido" icon="up" />
          <CardMetric color="blue" name="Total Vendido" icon="sales" />
          <CardMetric color="purple" name="Qtd. Vendida" icon="itemsSold" />
          <CardMetric color="orange" name="Ticket Médio" icon="ticket" />
          <CardMetric color="red" name="Custos de Produtos" icon="package" />
          {isOperatingExpenses && (
            <CardMetric
              color="red-safe"
              name="Gastos Operacionais"
              icon="percent"
            />
          )}
          <CardMetric color="green-safe" name="Margem Média" icon="wallet" />
        </section>

        <section id="grafics">
          <CardDashboard
            area="lucro"
            title={"Lucro Mensal"}
            subtitle={"Média: R$89/mês"}
          >
            <GraphicLucroMensal />
          </CardDashboard>

          <CardDashboard area="itemsVendidos" title={"Produtos mais vendidos"}>
            <GraphicItemsMaisVendidos />
          </CardDashboard>

          <CardDashboard area="entregasRetirada" title={"Vendas por Canal"}>
            <GraphicEntregasRetirada />
          </CardDashboard>
        </section>

        <section id="outras-infos">
          <CardDashboard className="vendas-recentes" title={"Vendas Recentes"}>
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
