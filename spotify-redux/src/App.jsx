import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import Player from "./Components/Player/Player";
import ArtistPage from "./pages/ArtistPage";
import AlbumPage from "./pages/AlbumPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/artist/:id" element={<ArtistPage />}></Route>
          <Route path="/album/:id" element={<AlbumPage />}></Route>
        </Routes>
        <Player />
      </BrowserRouter>
    </>
  );
}

export default App;
