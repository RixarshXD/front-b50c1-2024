import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



const Pagina1 = () => {
  const [nombre, setNombre] = useState("");
  // perime recuperar el valor de la variable, y el 2do parametro es una funcion que permite modificar la varaible

  const [apellido, setApellido] = useState("");
  const [eNombre, setEnombre] = useState("");

  const validarNombre = (valor: string) => {
    if (valor.length > 4) {
      setEnombre("");
    } else {
      setEnombre("debes ingresar al menos 4 caracteres");
    }
    setNombre(valor);
  };

  const registrar = () => {
    console.log(nombre + " " + apellido);
    alert("Registraste: " + nombre + " " + apellido);
  };

  return (
    <>
      <h1>
        Bienvenido {nombre} {apellido}
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingresar nombre"
            onChange={(n) => {
              validarNombre(n.currentTarget.value);
            }}
          />
          <Form.Text>{eNombre}</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingresar apellido"
            onChange={(a) => {
              setApellido(a.currentTarget.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={registrar}>
          Registrar
        </Button>

        
      </Form>
    </>
  );
};

export default Pagina1;
