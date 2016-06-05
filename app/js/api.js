export function getPokemon() {
  const url = 'http://localhost:8000/pokemon';
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
    })
    .then((json) => {
      return json.pokemon
    });
}

export function getPokemonByName(name = "bulbasaur") {
  const url = `http://localhost:8000/pokemon/${name}`;
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
    })
    .then((json) => json);
}
