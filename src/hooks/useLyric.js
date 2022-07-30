import { useEffect, useState } from "react";
import { getApi } from "../api/getapi";

export const useLyric = (terminoBusqueda) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getApi(terminoBusqueda).then(div => {
      setState({
        data: '',
        loading: false
      })
    })
  }, [terminoBusqueda])
  return state;
}