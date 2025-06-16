import Button from "../Button";
import Tag from "../Tag";

import { useGetFeatureGameQuery } from "../../services/api";
import { formatPreco } from "../ProductList";

import { Imagem, Titulo, Precos } from "./styles";

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formatPreco(game.prices.old)}</span>
            <br />
            por apenas {formatPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique qui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  );
};
export default Banner;
