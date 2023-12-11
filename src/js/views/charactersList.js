import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharactersList = () => {
  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(store.favorites);
  }, [store.favorites]);

  const addToFavorites = (item) => {
    if (!favorites.some((fav) => fav.uid === item.uid)) {
      actions.addToFavorites(item);
    }
  };

  const removeFromFavorites = (uid) => {
    actions.removeFromFavorites(uid);
  };

  const isFavorite = (uid) => favorites.some((fav) => fav.uid === uid);

  const charactersStyle = {
    display: "flex",
    overflowX: "auto",
  };

  const cardStyle = {
    flex: "0 0 auto",
    width: "18rem",
    marginRight: "15px",
  };

  const font = {
    fontFamily: "'Star Wars', sans-serif",
  };

  return (
    <div className="container text-center">
      <h1 className="text-danger fs-4" style={font}>Characters</h1>
      <div style={charactersStyle}>
        {store.characters.length === 0 ? (
          <>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          store.characters.map((item) => (
            <>
              <div style={cardStyle} key={item.uid}>
                <div className="card">
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-start card-title">{item.name}</h5>
                    <p className="card-text text-start">
                      Gender: male <br></br>
                      Hair Color: blond <br></br>
                      Eye-Color: blue <br></br>
                    </p>
                    <div className="d-flex justify-content-between">

                      <Link to={`/character-details/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => actions.addToFavorites(item)}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </>

          ))
        )}
      </div>
    </div>
  );
};

export default CharactersList;
