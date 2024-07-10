import { obtenerPersonas } from '@/firebase/Promesas'
import React, { useEffect, useState } from 'react'

import { Persona } from '@/interfaces/Interfaces'
import { Button, Table } from 'react-bootstrap'

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';


const Pagina4 = () => {

  const[personas, setPersonas] = useState<Persona[]>([])


    const traerDatos = () => {
        obtenerPersonas().then((personas) => {
            console.log(personas)
            setPersonas(personas)
        })
    }
    useEffect(()=>{
        traerDatos()
    },[])
  return (
    <>
      <Table>
        <thead>
          <tr>
          <th>nombre</th>
          <th>apellido</th>
          <th>rut</th>
          <th>fecha nacimiento</th>
          <th>edad</th>
          <th>correo</th>

          <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((p)=>{
            return <tr key={p.key}>
              <td>{p.nombre}</td>
              <td>{p.apellido}</td>
              <td>{p.rut}</td>
              <td>{p.fechaNacimiento}</td>
              <td>{p.edad}</td>
              <td>{p.correo}</td>

              <td>
                <Link href={{pathname:'/Pagina5/',query: {key:p.key}}}>
                  <Button variant='success'><FaEdit/></Button>
                </Link>

              <Button variant='danger'><MdDelete/></Button></td>
            </tr>
          })}
        </tbody>
      </Table>
    </>
  )
}


export default Pagina4