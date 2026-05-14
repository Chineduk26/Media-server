import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {

  const [images, setImages] = useState([]);

  const SERVER_IP = "localhost"; // Change this to your server's IP if not running locally

  const API = `http://${SERVER_IP}:5000/api`;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {

    try {

      const res = await axios.get(
        `${API}/files?category=image`
      );

      setImages(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-3 text-pink-400">
          Photo Gallery
        </h1>

        <p className="text-slate-400">
          Your personal cloud memories
        </p>

      </div>

      {/* IMAGE GRID */}
      <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">

        {images.map((image) => (

          <div
            key={image.id}
            className="relative group overflow-hidden rounded-2xl"
          >

            <img
              src={`http://${SERVER_IP}:5000/uploads/${image.filename}`}
              className="w-full rounded-2xl group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">

              <p className="text-sm break-words">
                {image.originalName}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Gallery;