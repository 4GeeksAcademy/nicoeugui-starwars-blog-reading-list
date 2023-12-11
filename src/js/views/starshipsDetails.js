import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const StarshipsDetails = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();

  // Carga los detalles del planeta cuando el componente se monta
  useEffect(() => {
    actions.starshipsDetails(uid);
  }, [uid]);

  const handleImageError = (event) => {
    event.target.src = "https://media.discordapp.net/attachments/1154140630914699355/1183512982139969677/placeholder.jpg?ex=65889b5b&is=6576265b&hm=9fd8863a1aa35d141a152b62168e1029e97011a8438e845a2d5197628c85fa2c&=&format=webp&width=600&height=550";
  };

  // Verifica si hay un planeta seleccionado en el estado y muestra sus atributos
  const starship = store.selectedStarship;

  return (
    <>
      <div className="container text-center">
        <div className="d-flex justify-content-between mt-5">
          <div className="text-start rounded-1 me-4">
            <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} onError={handleImageError} width={600} height={550} />
          </div>
          <div className="ms-5">
            {starship ? (
              <div>
                <h1 className="mb-3">{starship.properties.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nec lacus tellus cras nisl tristique cursus, nisi phasellus mauris litora duis nullam. A lobortis pharetra commodo facilisis volutpat cursus ridiculus primis sem porttitor fermentum, posuere eros vestibulum vehicula habitant lacus torquent molestie imperdiet nisi, ultrices aliquam consequat neque quisque etiam urna et risus sapien. Elementum tempus leo penatibus curae nulla arcu eros magnis, aliquet posuere hac netus varius fames velit mus bibendum, congue eget felis potenti ultricies mollis porttitor.</p>
                <p>Urna laoreet vitae sagittis tristique commodo feugiat tortor ut, quisque egestas ultrices id facilisis dis volutpat arcu magna, cubilia hendrerit parturient venenatis ac massa augue. Congue nam phasellus mauris luctus velit inceptos imperdiet nibh vivamus arcu rhoncus malesuada mi tempus condimentum, consequat habitant dictumst maecenas hac facilisis risus sed platea vehicula tempor massa morbi et. Mauris nibh vivamus montes nisl ad class auctor suscipit litora aenean sapien, accumsan duis natoque ridiculus hendrerit pretium taciti himenaeos ante. Convallis aptent mauris ornare curae sodales sem curabitur platea.</p>
              </div>
            ) : (
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div class="p-1 bg-danger w-100 mt-5"></div>

      <div className="text-center">
        {starship ? (
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex flex-column me-4">
                <h4>Name</h4>
                <p className="mb-3">{starship.properties.name}</p>
              </div>

              <div className="d-flex flex-column me-4">
                <h4>Manufacturer</h4>
                <p className="mb-3">{starship.properties.manufacturer}</p>
              </div>

              <div className="d-flex flex-column me-4">
                <h4>Crew</h4>
                <p className="mb-3">{starship.properties.crew}</p>
              </div>

              <div className="d-flex flex-column me-4">
                <h4>Cargo Capacity</h4>
                <p className="mb-3">{starship.properties.cargo_capacity}</p>
              </div>

              <div className="d-flex flex-column me-4">
                <h4>Max Speed</h4>
                <p className="mb-3">{starship.properties.max_atmosphering_speed}</p>
              </div>

              <div className="d-flex flex-column me-4">
                <h4>Passengers</h4>
                <p className="mb-3">{starship.properties.passengers}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>

    </>

  );
};

export default StarshipsDetails;
