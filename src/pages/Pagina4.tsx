import { obtenerPersonas } from '@/firebase/Promesas'
import React, { useEffect } from 'react'


const Pagina4 = () => {
    const traerDatos = () => {
        obtenerPersonas().then((personas) => {
            console.log(personas)
        })
    }
    useEffect(()=>{
        traerDatos()
    },[])
  return (
    <>
    
    </>
  )
}


export default Pagina4