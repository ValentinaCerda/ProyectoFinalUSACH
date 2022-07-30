import React, { useState } from 'react';

export const SearchLyric = ({ setSearchLyricProps }) => {
  const [inputValue, setInputValue] = useState('');
  const inputChange = (event) => {
    setInputValue(event.target.value)
  }
  const submitPrevent = (event) => {
    event.preventDefault()
    if (inputValue.trim().lenght > 0) {
      setSearchLyricProps(api => [inputValue, ...api])
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
              <label for="artista" class="form-label fw-bold">Artista</label>
              <input className='form-control' type="text" value={inputValue} onChange={inputChange} />

              <label for="cancion" class="form-label fw-bold">Canción</label>
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