import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./routes";
import { default as CharacterDetailPage } from "./routes/CharacterDetailPageFolder/CharacterDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/character-detail/:characterId"
          element={<CharacterDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
