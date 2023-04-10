import { Children } from "react"
import HookContext from "../hooks/HookConntext"

const Alerta = ({children}) => {

  return (
    <div className='alerta'>{children}</div>
  )
}

export default Alerta