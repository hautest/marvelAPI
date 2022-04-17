import { useState, useEffect } from "react";
import { CharactersList } from "../components/CharactersList";
import { Paging } from "../components/Paging";
import { getMarvelCharacterList } from "../api/getMarvelCharacterList";
import { getMarvelDataTotal } from "../api/getMarvelDataTotal";

const LIMIT = 9;

function MainPage() {
  const [apiData, setApiData] = useState([]);
  const [total, setTotal] = useState();
  const maxPage = Math.ceil(total / LIMIT);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT;

  const handlePageChange = async (page) => {
    setPage(page);
  };

  useEffect(() => {
    getMarvelDataTotal().then((res) => {
      setTotal(res);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { results } = await getMarvelCharacterList(offset);
      setApiData(results);
    };
    getData();
  }, [offset]);

  return (
    <div>
      <CharactersList apiData={apiData} />
      <Paging
        handlePageChange={handlePageChange}
        page={page}
        maxPage={maxPage}
      />
    </div>
  );
}

export default MainPage;
