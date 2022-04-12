import { useState, useEffect } from "react";
import { CharactersList } from "../components/CharactersList";
import { Paging } from "../components/Paging";
import { getMarvelCharacterList } from "../api/getMarvelCharacterList";

function MainPage() {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = async (page) => {
    setPage(page);
  };

  useEffect(() => {
    getMarvelCharacterList(page).then((data) => {
      setApiData(data.results);
    });
  }, [page]);

  return (
    <div>
      <CharactersList apiData={apiData} />
      <Paging handlePageChange={handlePageChange} page={page} />
    </div>
  );
}

export default MainPage;
