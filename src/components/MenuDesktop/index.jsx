import { Container } from "./style";
import logo from "../../images/LOGO.svg";
import { ItemMenu } from "../ItemMenu";
import { ItemCard } from "../ItemsCard";

export function MenuDesktop() {
  return (
    <Container className="overlay">
      <aside className="drawer">
        <img src="../" alt="" />

        <img src={logo} alt="" />
        <nav>
          <ItemMenu name={"Dashboard"} />
          <ItemMenu name={"Produtos"} />
          <ItemMenu name={"Categoria"} />
          <ItemMenu name={"Vendas"} />
          <ItemMenu name={"Canais"} />
          <ItemMenu name={"Pagamentos"} />
          <ItemMenu name={"Gastos"} />
          <ItemMenu name={"Entregas"} />
          <ItemMenu name={"Analytics"} />
          <ItemMenu name={"Catálogo"} />
          <ItemMenu name={"Perfil"} />
        </nav>
      </aside>
    </Container>
  );
}
