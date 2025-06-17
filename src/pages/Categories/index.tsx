import ProductList from "../../components/ProductList";

import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from "../../services/api";

const Categories = () => {
  const { data: actionGame, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: figthGames, isLoading: isLoadingFigth } =
    useGetFigthGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: sportsGame, isLoading: isLoadingSports } =
    useGetSportGamesQuery();

  return (
    <>
      <ProductList
        games={actionGame}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportsGame}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={figthGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFigth}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  );
};

export default Categories;
