import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { initialStatePersona } from "@/initialStates/InitialState"
import { Persona } from "@/interfaces/Interfaces"
import { obtenerPersona, registrarPersona } from "@/firebase/Promesas"

const Pagina5 = () => {
    const params = useRouter()
    useEffect(() => {
        console.log(params.query)
        // obtenerPersona(params.query.key)
        console.log()
        const key = params.query.key

        if (typeof key === 'string'){
            obtenerPersona(key).then((p)=> {
                if(p!=undefined){
                    setPersona(p)
                }
                else{
                    // redirecciono 
                    // muestro un mesaje
                }
            })
        }
    },[])

    const validarLargoMinimo = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }

    const [persona, setPersona] = useState < Persona >(initialStatePersona)


    const modificar = () => {

    }

    return (
        <>
            <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Ingrese Nombre'
                value={persona.nombre}
                name='nombre'
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Ingrese Apellido'
                value={persona.apellido}
                name='apellido' 
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control 
                type='number' 
                placeholder='Ingrese Edad'
                value={persona.edad}
                name='edad'
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Rut</Form.Label>
                <Form.Control 
                type='number' 
                placeholder='Ingrese Rut'
                value={persona.rut}
                name='rut'
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                type='email' 
                placeholder='Ingrese Correo'
                value={persona.correo}
                name='correo' 
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                type='date' 
                placeholder='Ingrese Fecha de Nacimiento' 
                value={persona.fechaNacimiento}
                name='fechaNacimiento'
                onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>

            <Button variant='success' onClick={modificar}>Modificar</Button>
            </Form>
        </>
    )
}

export default Pagina5;