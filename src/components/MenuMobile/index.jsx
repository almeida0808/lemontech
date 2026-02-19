import { Container } from "./styles";
import logo from "../../images/LOGO.svg";
import { ItemMenu } from "../ItemMenu";

export function MenuMobile({ open, onClose }) {
  return (
    <Container $open={open} className="overlay" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
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
