import { useEffect } from "react"

export const Alert = () => {
    useEffect(() => {
        console.log("Usuario existente")
    
      return () => {
        console.log("No existe")
      }
    }, [])
    
  return (
   <h3>Usuario ya creado</h3>
  )
}
