import React from 'react'

interface Props {
    Nombre: string,
    Apellido: string,
    Edad: number
}

const Perfil = (props:Props) => {
  return (
    <div>
        Nombre: {props.Nombre}
        Apellido: {props.Apellido}
        Edad: {props.Edad}

        {props.Edad > 18 && <p>eres mayor de edad</p>}
    </div>
  )
}

export default Perfil
