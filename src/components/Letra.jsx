import HookContext from "../hooks/HookConntext"

const Letra = () => {
    const { letra }= HookContext()
  return (
    <div className="letra">{letra}</div>
  )
}

export default Letra