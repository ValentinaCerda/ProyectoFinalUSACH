export const getApi = async (api) => {
  const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
  const resp = await fetch(URL)
  const { data } = await resp.json()
  const apis = data.map( div => {
    return {
      artista: '',
      cancion: ''
    }
  })
  return apis
}