import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import SearchLyric from "./components/SearchLyric";
import Song from "./components/Song";
import { Footer } from "./components/Footer";
import axios from "axios";

function App() {
  // Utilizar useState con 3 states
  // const [agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);

  // Método para consultar la API de Letras de canciones
  const consultarAPILetra = async busqueda => {
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios(url);
      agregarLetra(resultado.data.lyrics);
    } catch (error) {
      throw error
    }
  };
  

  return (
    <div>
      <Navbar />
      
      <div className="fondo">
     
        <SearchLyric consultarAPILetra={consultarAPILetra} />
        <div className="mt-5">
          <div className="row">
            
            <div className="col-md-6">
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