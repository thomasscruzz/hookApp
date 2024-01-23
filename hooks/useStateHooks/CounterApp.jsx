import { useState } from 'react';

export const CounterApp = () => {

  const [cont, setcont] = useState({
    cont1:10,
    cont2:20,
    cont3:30
  })

  const { cont1 , cont2 , cont3 } = cont;

  return (
    <>
        <h1>counter depurar: {cont1} </h1>
        <h1>counter depurar: {cont2} </h1>
        <h1>counter depurar: {cont3} </h1>


        <hr />

        <button className="btn" onClick={ () => setcont({
          ...cont,
          cont1 : cont1+1
        }) } > +1  </button>
    </>
    
  )
}
