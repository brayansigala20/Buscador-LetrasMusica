import Formulario from "./Formulario"
import HookContext from "../hooks/HookConntext" 
import Letra from "./Letra"
import Alerta from "./Alerta"

const AppLetras = () => {
  const {alerta, letra} = HookContext()
  return (
    <>
    <header>Busqueda de Letras de canciones</header>
    <Formulario/>
     <main>
      {alerta ? <Alerta>{alerta}</Alerta>:
       letra ? <Letra/>:
       <p className="text-center"> busca letras de tus cantantes favoritos</p>}
     </main>
    </>
  )
}

export default AppLetras