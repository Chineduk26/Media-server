import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Files from "./pages/file";
import Movies from "./pages/Movies";
import Gallery from "./pages/Gallery";
import Downloader from "./pages/Downloader";

function App() {

  return (

    <div className="bg-slate-950 text-white min-h-screen">

      <nav className="flex gap-6 p-4 bg-slate-900 border-b border-slate-700">

        <Link to="/">Home</Link>
        <Link to="/files">Files</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/download">Downloader</Link>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/files" element={<Files />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/download" element={<Downloader />} />

      </Routes>

    </div>
  );
}

export default App;