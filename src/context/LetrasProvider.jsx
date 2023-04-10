import axios from "axios"
import { useState, createContext } from "react"
const LetrasContext = createContext()

const LetrasProvider = ({children}) => {
    const [alerta, setAlerta] = useState('')
    const [letra, setLetra]= useState('')

    const LetrasBusqueda = async (busqueda) =>{
      try {
        const {artista,cancion} = busqueda
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const {data} = await axios(url)
        setLetra(data.lyrics)
      } catch (error) {
        console.log(error)
      }
    }
    

  return (
    <LetrasContext.Provider
    value={{
        alerta,
        setAlerta,
        LetrasBusqueda,
        letra
    }}
    >
     {children}
    </LetrasContext.Provider>
    
  )
}
export {
 LetrasProvider
}
export default LetrasContext