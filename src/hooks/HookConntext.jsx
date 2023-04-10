import { useContext } from "react";
import LetrasContext from "../context/LetrasProvider";

const HookContext = () =>{
     return useContext(LetrasContext)
}

export default HookContext