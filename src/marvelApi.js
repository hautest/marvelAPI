import axios from "axios";

const PER_PAGE = 10;

export const getMarvelCharacterList = async (page) => {
  const displayByPage = PER_PAGE * page - PER_PAGE;
  const marvelApi = `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=${displayByPage}&apikey=cca935aa0ee3e912752f21a0ffa3633f`;
  const { data } = await axios.get(marvelApi);

  return data.data.results;
};
