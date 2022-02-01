async function getPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  console.log(json.results);
  return json.results;
}

export default getPlanets;
