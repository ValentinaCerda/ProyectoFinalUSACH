import React, { useState } from "react";

function SearchLyric({ consultarAPILetra }) {
  const [busqueda, agregarBusqueda] = useState({
    artista: "",
    cancion: ""
  });

  // función para actualizar el state de los inputs
  const actualizarState = e => {
    agregarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  // cuando hacemos submit al form
  const enviarInformacion = e => {
    e.preventDefault();
    consultarAPILetra(busqueda);
  };

  return (
    <div className="fondo container">
    
        <h1>Lyrics</h1>
        <div className="row mt-5">
          <div className="text-center">
            <form onSubmit={enviarInformacion}>
              <div className="formulario text-center">
                <label htmlFor="artista" className="form-label fw-bold">Artista</label>
                <input
                  type="text"
                  className="form-control artista "
                  name="artista"
                  placeholder="Nombre Artista"
                  onChange={actualizarState}
                  required
                />

                <label htmlFor="cancion" className='form-label fw-bold'>Canción</label>
                <input
                  type="text"
                  className="form-control artista"
                  name="cancion"
                  placeholder="Nombre Canción"
                  onChange={actualizarState}
                  required
                />
              </div>
              <button type="submit" className="btn boton">
                Buscar
              </button>
            </form>
          </div>
        </div>
      
    </div >
  );
}

export default SearchLyric;