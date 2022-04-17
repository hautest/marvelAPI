import axios from "axios";

export const getMarvelDataTotal = async () => {
  const marvelApi = `https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=${process.env.REACT_APP_API_KEY}`;
  const { data } = await axios.get(marvelApi);
  console.log(data.data.total);
  return data.data.total;
};
