import React, { useState } from 'react';
// https://lyrics.ovh/ (web de API)

export const Lyric = ({ setLyricProps }) => {
  const [inputValue, setInputValue] = useState('');
  const inputChange = (event) => {
    setInputValue(event.target.value)
  }
  const submitPrevent = (event) => {
    event.preventDefault()
    if (inputValue.trim().lenght > 0) {
      setLyricProps(api => [inputValue, ...api])
      setInputValue('')
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center mb-3'>Letras de Canciones</h1>
      <div className='row mt-5'>
        <div className='col-4'>
          <form onSubmit={submitPrevent}>
            <div className='formulario mb-3'>
              <label htmlFor="artista" className='form-label fw-bold'>Artista</label>
              <input className='form-control' type="text" value={inputValue} onChange={inputChange} />

              <label htmlFor="cancion" className='form-label fw-bold'>Canción</label>
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
