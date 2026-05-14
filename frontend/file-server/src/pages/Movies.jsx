import { useEffect, useState } from "react";
import axios from "axios";

function Movies() {

  const [movies, setMovies] = useState([]);

  const SERVER_IP = "localhost"; // Change this to your server's IP if not running locally

  const API = `http://${SERVER_IP}:5000/api`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {

    try {

      const res = await axios.get(
        `${API}/files?category=video`
      );

      setMovies(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div className="relative h-[60vh] w-full">

        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src={
              movies[0]
                ? `http://${SERVER_IP}:5000/uploads/${movies[0].filename}`
                : ""
            }
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-10 left-10">

          <h1 className="text-5xl font-bold mb-4">
            Hybrid Cinema
          </h1>

          <p className="text-slate-300 text-lg">
            Stream your personal movie collection
          </p>

        </div>

      </div>

      {/* MOVIE GRID */}
      <div className="p-8">

        <h2 className="text-3xl font-bold mb-6">
          Trending Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 hover:scale-105 transition duration-300"
            >

              <video
                className="w-full h-64 object-cover"
                muted
              >
                <source
                  src={`http://${SERVER_IP}:5000/uploads/${movie.filename}`}
                />
              </video>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">

                <p className="font-bold text-lg mb-3">
                  {movie.originalName}
                </p>

                <video
                  controls
                  className="rounded-xl"
                >
                  <source
                    src={`http://${SERVER_IP}:5000/uploads/${movie.filename}`}
                  />
                </video>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Movies;