import axios from "axios";

export const getMarvelCharacterList = async (offset) => {
  const marvelApi = `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=${process.env.REACT_APP_API_KEY}`;
  const { data } = await axios.get(marvelApi);
  return data.data;
};
