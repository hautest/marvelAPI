import { useState, useEffect } from "react";
import { CharactersList } from "../components/CharactersList";
import { Paging } from "../components/Paging";
import { useDispatch } from "react-redux";
import { getMarvelList } from "../store/slice";

const LIMIT = 9;

function MainPage() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT;

  const handlePageChange = async (page) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(getMarvelList(offset));
  }, [offset, dispatch]);

  return (
    <div>
      <CharactersList />
      <Paging handlePageChange={handlePageChange} page={page} />
    </div>
  );
}

export default MainPage;
