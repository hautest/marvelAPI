import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./routes";
import { default as CharacterDetailPage } from "./routes/CharacterDetailPageFolder/CharacterDetailPage";
import "./App.css";

function App() {
  return (
    <div>
      <header className="marvelLogo">
        <img
          width="300px"
          alt="마블로고"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"
        />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/character-detail/:characterId"
              element={<CharacterDetailPage />}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
