import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-12 text-sky-400">
        Hybrid Media Server
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <Link
          to="/files"
          className="bg-slate-900 p-10 rounded-2xl border border-slate-700 hover:border-sky-400"
        >
          <h2 className="text-3xl mb-4">📁 Files</h2>
          <p>Documents, PDFs, Sheets and uploads</p>
        </Link>

        <Link
          to="/movies"
          className="bg-slate-900 p-10 rounded-2xl border border-slate-700 hover:border-green-400"
        >
          <h2 className="text-3xl mb-4">🎬 Movies</h2>
          <p>Stream videos across your network</p>
        </Link>

        <Link
          to="/gallery"
          className="bg-slate-900 p-10 rounded-2xl border border-slate-700 hover:border-pink-400"
        >
          <h2 className="text-3xl mb-4">🖼 Gallery</h2>
          <p>Store and preview pictures</p>
        </Link>

      </div>

    </div>
  );
}

export default Home;