export default function getPokemon(self) {
  const url = 'http://localhost:8000/pokemon';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const options = {
    method: 'GET',
    headers: headers
  };
  fetch(url, options)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      self.setState({ pokemon: json.pokemon })
    });
}

function getPokemonByName(self, name) {
  const url = `http://localhost:8000/pokemon/${name}`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const options = {
    method: 'GET',
    headers: headers
  };
  fetch(url, options)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      self.setState({ entry: json });
    });
}
