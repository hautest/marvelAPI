import axios from "axios";

export const getMarvelCharacterDetail = async (characterId) => {
  const marvelApi = `https://gateway.marvel.com:443/v1/public/characters/${characterId}`;
  const { data } = await axios.get(marvelApi, {
    params: {
      apikey: process.env.REACT_APP_API_KEY,
    },
  });

  return data.data;
};
