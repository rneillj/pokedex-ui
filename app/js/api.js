export function getPokemon() {
  const url = 'http://localhost:8000/pokemon';
  return apiCall(url).then((json) => {
      return json.pokemon
    });
}

export function getPokemonByName(name = "bulbasaur") {
  const url = `http://localhost:8000/pokemon/${name}`;
  return apiCall(url).then((json) => json);
}

function apiCall(url) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const options = {
    method: 'GET',
    headers: headers
  };
  return fetch(url, options)
    .then((response) => {
      return response.json()
    });
}
