import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import SearchLyric from "./components/SearchLyric";
import Song from "./components/Song";
import { Footer } from "./components/Footer"
import axios from "axios";

function App() {
  // Utilizar useState con 3 states
  // const [agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);

  // Método para consultar la API de Letras de canciones
  const consultarAPILetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    // consultar la api
    const resultado = await axios(url);

    // almacenar el artista que se buscó
    //agregarArtista(artista);

    // almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  };

  return (
    <div className="pruebados">
      <Navbar />
      <Background />
      <div className="prueba">
     
        <SearchLyric consultarAPILetra={consultarAPILetra} />
        <div className="container mt-5">
          <div className="row">
            
            <div className="col-md-6 test">
              <Song letra={letra} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;