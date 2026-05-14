import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUpload,
  FaTrash,
  FaFile
} from "react-icons/fa";

function file() {

  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const SERVER_IP = "localhost"; // Change this to your server's IP if not running locally

  const API = `http://${SERVER_IP}:5000/api`;

  const fetchFiles = async () => {

    try {

      const res = await axios.get(`${API}/files`);

      setFiles(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {

    fetchFiles();

  }, []);

  const uploadFile = async () => {

    if (!selectedFile) {

      return alert("Select a file first");
    }

    const formData = new FormData();

    formData.append("file", selectedFile);

    try {

      await axios.post(
        `${API}/files/upload`,
        formData
      );

      alert("Upload successful");

      setSelectedFile(null);

      fetchFiles();

    } catch (err) {

      console.log(err);

      alert("Upload failed");
    }
  };

  const deleteFile = async (id) => {

    try {

      await axios.delete(`${API}/files/${id}`);

      fetchFiles();

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 text-sky-400">
          Hybrid File Server
        </h1>

        <div className="bg-slate-900 rounded-2xl p-10 border border-sky-500 mb-10">

          <div className="flex flex-col items-center">

            <FaUpload className="text-5xl text-sky-400 mb-4" />

            <h2 className="text-2xl font-semibold mb-4">
              Upload File
            </h2>

            

          <input
                 type="file"
                  id="fileInput"
                 className="hidden"

                 accept="
                    image/*,
                    video/*,
                    .pdf,
                    .doc,
                    .docx,
                    .xls,
                    .xlsx,
                    .ppt,
                    .pptx,
                    .txt
                   "

  onChange={(e) =>
    setSelectedFile(e.target.files[0])
  }
/>

            <label
              htmlFor="fileInput"
              className="bg-sky-500 hover:bg-sky-600 text-black px-6 py-3 rounded-xl cursor-pointer font-bold"
            >
              Choose File
            </label>

            {selectedFile && (

              <p className="mt-4 text-slate-300">
                {selectedFile.name}
              </p>
            )}

            <button
              onClick={uploadFile}
              className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-bold text-black"
            >
              Upload
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {files.map((file) => (

            <div
              key={file.id}
              className="bg-slate-900 rounded-2xl p-5 border border-slate-700"
            >

              <FaFile className="text-3xl text-sky-400 mb-4" />

              <p className="break-words mb-4">
                {file.originalName}
              </p>

              <div className="flex justify-between items-center">

                <a
                  href={`http://${SERVER_IP}:5000/uploads/${file.filename}`}
                  target="_blank"
                >

                  <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg text-black font-semibold">
                    Open
                  </button>

                </a>

                <button
                  onClick={() => deleteFile(file.id)}
                  className="bg-red-500 hover:bg-red-600 p-3 rounded-lg"
                >

                  <FaTrash />

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default file;