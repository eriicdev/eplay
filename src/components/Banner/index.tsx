import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { Imagem, Titulo, Precos } from './styles'

import { useGetFeatureGameQuery } from '../../services/api'

import { formatPreco } from '../ProductList'

const Banner = () => {
  const { data: game, isLoading } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
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
  )
}
export default Banner
