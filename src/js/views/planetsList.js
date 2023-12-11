import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetsList = () => {

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

    const planetsStyle = {
        display: "flex",
        overflowX: "auto",
    };

    const cardStyle = {
        flex: "0 0 auto",
        width: "18rem",
        marginRight: "15px",
    };

    const handleImageError = (event) => {
        event.target.src = "https://media.discordapp.net/attachments/1154140630914699355/1183512982139969677/placeholder.jpg?ex=65889b5b&is=6576265b&hm=9fd8863a1aa35d141a152b62168e1029e97011a8438e845a2d5197628c85fa2c&=&format=webp&width=400&height=400";
    };

    const font = {
        fontFamily: "'Star Wars', sans-serif",
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="text-danger fs-4" style={font}>Planets</h1>
            <div style={planetsStyle}>
                {store.planets.length === 0 ? (
                    <>
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                ) : (
                    store.planets.map((item, index) => (
                        <>
                            <div style={cardStyle} key={index}>
                                <div className="card">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." onError={handleImageError} />
                                    <div className="card-body">
                                        <h5 className="text-start card-title">{item.name}</h5>
                                        <p className="card-text text-start">
                                            Popultation: 200.000.000 <br></br>
                                            Terrain: grasslands, mountains <br></br>

                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/planet-details/${item.uid}`} className="btn btn-outline-primary">
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

export default PlanetsList;