import { useState } from 'react';

export const CounterApp = () => {

  const [cunter, setCunter] = useState([])
    
  return (
    <>
        <h1>counter : {cunter} </h1>
        <hr />
        <button className="btn" onClick={ () => setCunter(cunter+1) } > +1  </button>
    </>
    
  )
}
