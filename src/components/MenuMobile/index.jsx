import { Container } from "./styles";
import logo from "../../images/LOGO.svg";
import { ItemMenu } from "../ItemMenu";

export function MenuMobile({ onClose }) {
  return (
    <Container className="overlay" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <img src="../" alt="" />

        <img src={logo} alt="" />
        <nav>
          <ItemMenu name="TESTANDO" />
          <ItemMenu name="TESTANDO" />
          <ItemMenu name="TESTANDO" />
          <ItemMenu name="TESTANDO" />
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
