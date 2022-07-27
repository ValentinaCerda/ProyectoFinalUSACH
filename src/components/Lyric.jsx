import React, { useState } from 'react';

export const Lyric = () => {
  const subtitle = props => {
    const [enabled, setEnabled] = useState(true);
    const src = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const className = enabled ? "" : "disabled";
  }
  return (
    <div>
      <h1 className='text-center mb-3'>Letras de Canciones</h1>
      <div className='row mt-5'>
        <div className='col-4'>
          <form >
          <div className='formulario mb-3'>
             
           
            <input className='form-control' type="text" />
              onClick={()=>setEnabled(!enabled)}
              className={className}
              src={src}
            <input className='form-control' type="text" />
          </div>
          <button className='btn btn-info'>Buscar</button>
        </form>
      </div>

      <div className='result col-8 text-center'>
        <p className='titulo fw-bold'>Letra </p>
        <p className='fw-bold letra'><br /></p>
      </div>
    </div>
    </div>
  )
}
