import { Header } from "../../components/Header";
import { MenuDesktop } from "../../components/MenuDesktop";
import { Container } from "./style";
import { useIsDesktop } from "../../Hooks/useIsDesktop";
import { PageLayout } from "../../components/PageLayout";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonDate } from "../../components/ButtonDate";
import { ButtonSelect } from "../../components/ButtonSelect";

export function Products() {
  const isDesktop = useIsDesktop();

  return (
    <Container>
      {isDesktop ? <MenuDesktop /> : <Header />}

      <PageLayout
        title={"Produtos"}
        subtitle={"Gerencie seu estoque de produtos"}
        actions={
          <>
            <ButtonIcon
              icon="itemsSold"
              name="Nova Venda"
              color={"green"}
              background={true}
            />
          </>
        }
      >
        <section>
          <div id="filtros">
            <div id="search">
              <i class="ph ph-magnifying-glass" />
              <input type="text" placeholder="Buscar Produtos"></input>
            </div>
            <div id="buttons-filters">
              <ButtonDate />
              <ButtonSelect></ButtonSelect>
              <ButtonIcon icon={"filter"} />
            </div>
          </div>

          <div id="products">
            <div id="header-products">
              <i class="ph ph-trend-up"></i>
              <div id="title-product">
                <h3>TITULO PRODUTO</h3>
                <span>Categoria</span>
              </div>
              <div id="options-buttons">
                <button>
                  <i class="ph ph-trend-up" />
                </button>

                <button>
                  <i class="ph ph-trend-up" />
                </button>

                <button>
                  <i class="ph ph-trend-up" />
                </button>

                <button>
                  <i class="ph ph-trend-up" />
                </button>

                <button>
                  <i class="ph ph-trend-up" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Container>
  );
}
