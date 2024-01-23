import { useEffect, useState } from "react"
import { Alert } from "./Alert";

export const SimpleForm = () => {

    const [data, setData] = useState({
        username:"nombre de usuario",
        email:"email@xxx.com"
    })

    const {username,email} = data;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setData({
            ...data,
            [name] : value
        })
    }
    
    useEffect(() => {
        console.log("Cambiaste el nombre de usuario")
    }, [username])
    useEffect(() => {
        console.log("Cambiaste el email")
    }, [email])

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

        {
            username==="lucascruz" && <Alert />
        }

    </>
    
  )
}
