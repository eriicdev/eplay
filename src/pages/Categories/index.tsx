import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import StarWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {

  const { data: actionGame } = useGetActionGamesQuery()
  const { data: figthGames } = useGetFigthGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGame } = useGetSportGamesQuery()

  if ( actionGame && figthGames && rpgGames && simulationGames && sportsGame ) {
    return (
      <>
        <ProductList games={actionGame} title="Ação" background="black" />
        <ProductList games={sportsGame} title="Esportes" background="gray" />
        <ProductList games={figthGames} title="Luta" background="black" />
        <ProductList games={rpgGames} title="RPG" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
