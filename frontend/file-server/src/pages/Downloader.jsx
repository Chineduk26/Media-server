import { useState } from "react";
import axios from "axios";

function Downloader() {

  const [url, setUrl] = useState("");

  const SERVER_IP = "YOUR_SERVER_IP";

  const API = `http://${SERVER_IP}:5000/api`;

  const handleDownload = async () => {

    try {

      const res = await axios.post(
        `${API}/download`,
        { url }
      );

      alert("Downloaded Successfully");

      setUrl("");

    } catch (err) {

      console.log(err);

      alert("Download failed");
    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-slate-900 p-10 rounded-3xl w-[500px] shadow-2xl">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Download From URL
        </h1>

        <input
          type="text"
          placeholder="Paste file URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-5 outline-none"
        />

        <button
          onClick={handleDownload}
          className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-xl text-lg font-bold"
        >
          Download
        </button>

      </div>

    </div>
  );
}

export default Downloader;