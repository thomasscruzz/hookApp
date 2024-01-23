import { useConter } from "../src/hooksPractice/useCounter"

export const CounterWhitHook = () => {

    const {contador , incrementar , restar , resetear} = useConter()

    return (
            <>
            
            <h1>Practicando sumas : {contador} </h1>
            <button className="btn btn-primary" onClick={ () => incrementar(2) }>+1</button>
            <button className="btn btn-primary" onClick={restar}>-1</button>
            <button className="btn btn-primary" onClick={resetear}>reset</button>


            </>
    )


}
