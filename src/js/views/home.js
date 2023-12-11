import React, { useContext } from "react";
import CharactersList from "./charactersList";
import PlanetsList from "./planetsList";
import StarshipsList from "./starshipsList";
export const Home = () => {

  return (
      <div className="container">
          <CharactersList/>
          <PlanetsList/>
          <StarshipsList/>
      </div>
  );
};
