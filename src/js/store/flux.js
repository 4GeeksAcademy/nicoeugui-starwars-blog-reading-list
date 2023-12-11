const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			starships: [],
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				const url = 'https://www.swapi.tech/api/people';
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch personajes', data);
						setStore({ characters: data.results });
					});
			},

			getPlanets: () => {
				const url = 'https://www.swapi.tech/api/planets'
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch personajes', data);
						setStore({ planets: data.results });
					})
			},

			getStarships: () => {
				const url = 'https://www.swapi.tech/api/starships'
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch StarShips', data);
						setStore({ starships: data.results })
					})
			},

			characterDetails: (characterId) => {
				const url = `https://www.swapi.tech/api/people/${characterId}`;
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch Detail', data);

						// Verifica si 'result' y 'properties' existen en la respuesta
						if (data.result && data.result.properties) {
							setStore({ selectedCharacter: data.result });
						} else {
							console.error('Invalid API response structure');
						}
					})
					.catch(error => console.error('Error fetching character details', error));
			},

			planetDetails: (planetId) => {
				const url = `https://www.swapi.tech/api/planets/${planetId}`;
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch Detail', data);

						// Verifica si 'result' y 'properties' existen en la respuesta
						if (data.result && data.result.properties) {
							setStore({ selectedPlanet: data.result });
						} else {
							console.error('Invalid API response structure');
						}
					})
					.catch(error => console.error('Error fetching planet details', error));
			},

			starshipsDetails: (starshipId) => {
				const url = `https://www.swapi.tech/api/starships/${starshipId}`;
				return fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log('Fetch Detail', data);

						// Verifica si 'result' y 'properties' existen en la respuesta
						if (data.result && data.result.properties) {
							setStore({ selectedStarship: data.result });
						} else {
							console.error('Invalid API response structure');
						}
					})
					.catch(error => console.error('Error fetching planet details', error));
			},

			addToFavorites: (item) => {
				const store = getStore();
				const isAlreadyFavorited = store.favorites.some((fav) => fav.uid === item.uid);

				if (!isAlreadyFavorited) {
					const updatedFavorites = [...store.favorites, item];
					setStore({ favorites: updatedFavorites });
				} else {
					// Si ya está en favoritos, quitarlo
					const updatedFavorites = store.favorites.filter((fav) => fav.uid !== item.uid);
					setStore({ favorites: updatedFavorites });
				}
			},



			removeFromFavorites: (uid) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
				setStore({ favorites: updatedFavorites });
			}



		}
	};
};

export default getState;
