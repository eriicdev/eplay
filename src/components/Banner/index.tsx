import Button from "../Button";
import Tag from "../Tag";
import Loader from "../Loader";

import { useGetFeatureGameQuery } from "../../services/api";

import * as S from "./styles";
import { parseToBrl } from "../../utils";

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery();

  if (!game) {
    return <Loader />;
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique qui para aproveitar esta oferta"
          variant="secondary"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  );
};
export default Banner;
