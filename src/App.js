import React, { useState, useEffect, Fragment } from "react";
import { Navbar } from "./components/Navbar"
import SearchLyric from "./components/SearchLyric";
import Song from "./components/Song";
//import Info from "./components/Info";
import { Footer } from "./components/Footer"
import axios from "axios";

function App() {
  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  //const [info, agregarInfo] = useState({});

  // Método para consultar la API de Letras de canciones
  const consultarAPILetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    // consultar la api
    const resultado = await axios(url);

    // almacenar el artista que se buscó
    agregarArtista(artista);

    // almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  };
/*
  // Método para consultar la API de Información
  const consultarAPIInfo = async () => {
    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);
      agregarInfo(resultado.data.artists[0]);
      // console.log(info);
    }
  };

  useEffect(() => {
    consultarAPIInfo();
  }, [artista]);*/

  return (
    <Fragment>
      <Navbar />
      
        <SearchLyric consultarAPILetra={consultarAPILetra} />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
             
            </div>
            <div className="col-md-6">
              <Song letra={letra} />
            </div>
          </div>
        </div>

      <Footer />
    </Fragment>
  );
}

export default App;



//import { Navbar } from "./components/Navbar";
//import { Background } from "./components/Background";
//import { Lyric } from "./components/Lyric"
//import { Footer } from "./components/Footer";
//import { SearchLyric } from "./components/SearchLyric"

/*function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <SearchLyric />
      <Footer />
    </div>
  );
}

export default App;*/