import { Container } from "./style";

export function ItemCard({
  title,
  plataforma,
  data,
  valor,
  lucro,
  categoria,
  unidades,
}) {
  return (
    <Container>
      {lucro ? (
        <>
          <div id="title">
            <strong>{title}</strong>
            <span>
              {plataforma} • {data}
            </span>
          </div>
          <div id="values">
            <strong>R${valor}</strong>
            <span>
              <i class="ph ph-trend-up"></i>
              +R${lucro}
            </span>
          </div>
        </>
      ) : (
        <>
          <div id="title">
            <strong>{title}</strong>
            <span>{categoria}</span>
          </div>
          <div id="quantidade">
            <p>{unidades} un.</p>
          </div>
        </>
      )}
    </Container>
  );
}
