import Tag from '../Tag'
import { Banner, Infos } from './styles'

import Button from '../Button'
import { Game } from '../../pages/Home'

import { formatPreco } from '../ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})`}}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formatPreco(game.prices.old)}</span>
          )}
          <br />
          {game.prices.current && (
            <>
              Por {formatPreco(game.prices.current)}
            </>
          )}
        </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
