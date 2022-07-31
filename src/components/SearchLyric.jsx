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
    <div className="fondo">
      <div className="container">
        <h1 className="text-center mb-3">Buscador de Letras</h1>
        <div className="row mt-5">
          <div className="col-4">
            <form onSubmit={enviarInformacion}>
              <div className="formulario mb-3">
                <label htmlFor="artista" className="form-label fw-bold">Artista</label>
                <input
                  type="text"
                  className="form-control"
                  name="artista"
                  placeholder="Nombre Artista"
                  onChange={actualizarState}
                  required
                />

                <label htmlFor="cancion" className='form-label fw-bold'>Canción</label>
                <input
                  type="text"
                  className="form-control"
                  name="cancion"
                  placeholder="Nombre Canción"
                  onChange={actualizarState}
                  required
                />
              </div>
              <button type="submit" className="btn btn-info float-right">
                Buscar
              </button>
            </form>
          </div>
          <div className='resultado col-8 text-center'>
            <p className='titulo fw-bold'>Letra </p>
            <p className='fw-bold letra'><br /></p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default SearchLyric;