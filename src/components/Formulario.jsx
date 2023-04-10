import { useState } from "react"
import LetrasContext from "../context/LetrasProvider"
import HookContext from "../hooks/HookConntext"

const Formulario = () => {
    const {setAlerta,LetrasBusqueda} = HookContext()

     const [state, setState]=useState({
        artista: '',
        cancion: ''
     })
     
     const handleSubmit =(e)=>{
        e.preventDefault()

        if(Object.values(state).includes('')){
            setAlerta('not found')
            return
        }
        LetrasBusqueda(state)
         setAlerta('')

     }
  return (
    <form 
      onSubmit={handleSubmit}>
        
        <legend>Buscar Letras De Canciones</legend>
        <div className='form-grid'>
          <div>
            <label>Artista</label>
                <input 
                type="text"
                value={state.artista}
                name='artista'
                onChange={(e)=> setState({
                    ...state,
                    [e.target.name]: e.target.value
                })}  />
          </div>
          <div>
            <label>cancion</label>
                <input 
                type="text"
                value={state.cancion}
                name='cancion'
                onChange={e => setState({
                    ...state,
                    [e.target.name]: e.target.value
                }) }  />
          </div>
          <input 
          type="submit"
          value={'buscar'}
           />

        </div>
    </form>
  )
}

export default Formulario