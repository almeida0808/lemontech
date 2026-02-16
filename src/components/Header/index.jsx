import { Container } from "./styles";
import logo from "../../images/LOGO.svg";
import { Menu } from "lucide-react";
import { MenuMobile } from "../MenuMobile";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }
  return (
    <Container>
      <img src={logo} alt="" />

      <button className="menu" onClick={toggleMenu}>
        <Menu size={28} />
      </button>
      <MenuMobile open={open} onClose={toggleMenu} />
    </Container>
  );
}
