import { Container } from "./style";
import logo from "../../images/LOGO.svg";
import { ItemMenu } from "../ItemMenu";

export function MenuDesktop() {
  return (
    <Container className="overlay">
      <aside className="drawer">
        <img src="../" alt="" />

        <img src={logo} alt="" />
        <nav>
          <a href="">Dashboard</a>
          <a href="">Produtos</a>
          <a href="">Categoria</a>
          <a href="">Vendas</a>
          <a href="">Canais</a>
          <a href="">Pagamentos</a>
          <a href="">Gastos</a>
          <a href="">Entregas</a>
          <a href="">Analytics</a>
          <a href="">Catálogo</a>
          <a href="">Perfil</a>
        </nav>
      </aside>
    </Container>
  );
}
