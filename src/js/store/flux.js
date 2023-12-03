const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				const textResponse = await fetch("https://swapi.dev/api/people");
				const jsonResponse = await textResponse.json();
				setStore ({...store, people: jsonResponse.resolts});
			};
			getPlanet: async () => {
				const store = getStore();
				await fetch("https://swapi.dev/api/planets")
				const jsonResponse = await textResponse.json();
				setStore ({...store, planets: jsonResponse.resolts});
			};
			getStarship: async () => {
				const store = getStore();
				await fetch("https://swapi.dev/api/starships")
				const jsonResponse = await textResponse.json();
				setStore ({...store, starships: jsonResponse.resolts});
			};
			
			getPerson: () => {

			}
			getPlanet: () => {
				
			}
			getStarship: () => {
				
			}
		}
	};
};

export default getState;
