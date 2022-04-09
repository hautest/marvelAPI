import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterInformation } from "./components/CharacterInformation";
import { getMarvelCharacterList } from "./marvelApi";
import { Main } from "./components/Main";

function App() {
  const [apiData, setApiData] = useState();
  const [page, setPage] = useState(1);

  const handlePageChange = async (page) => {
    setPage(page);
  };

  const handleSetApiData = useCallback((data) => {
    setApiData(data);
  }, []);

  useEffect(() => {
    getMarvelCharacterList(page).then((data) => {
      handleSetApiData(data);
    });
  }, [page, handleSetApiData]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                apiData={apiData}
                handleSetApiData={handleSetApiData}
                handlePageChange={handlePageChange}
                page={page}
              />
            }
          />

          <Route
            path="/CharacterInformation/:CharacterName"
            element={<CharacterInformation apiData={apiData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
