import {useState} from "react";

export const useConter = (value = 10) => {

    const [contador, setcontador] = useState(value)

    const incrementar = (acumulador) => {
        setcontador(contador+acumulador)
    }
    const restar = () => {
        setcontador(contador-1)
    }
    const resetear = () => {
        setcontador(value)
    }
    return{
        contador,
        incrementar,
        resetear,
        restar
    }
}

