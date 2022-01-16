const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = () => {
  return fetch(BASE_URL)
    .then(res => res.json())
}
