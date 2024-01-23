import { Alert } from "./Alert";
import { useState } from "react";


export const FormUseCustomHook = () => {

    const {data, setData} = useState({
        username:"",
        email:"",
        password:""
    })

    const {username,email,password} = data;
    
  const onInputChange = ({target}) => {
        const {name, value} = target
        setData({
            ...data,
            [name] : value
        })
    }

    const onResetForm = ({data}) => {
        if (data.include()) return;
    }
    
  return (

    <>
        <h1>Formulario</h1>
        <hr />

        <input 
        type="text"
        placeholder="Username"
        className="form-control"
        name="username" 
        value={username}
        onChange={onInputChange}
        />

        <input 
        type="email" 
        className="form-control" 
        name="email" 
        placeholder="nombre@gmail.com" 
        value={email}
        onChange={onInputChange}
        />

        <input 
        type="password" 
        className="form-control" 
        name="password" 
        placeholder="contraseña" 
        value={password}
        onChange={onInputChange}
        />

        <button onClick={onResetForm}>Borrar</button>


        {
            username==="lucascruz" && <Alert />
        }


    </>
    
  )
}
