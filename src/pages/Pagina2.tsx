import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Pagina2 = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const actualizarN1 = (valor: number) => {
    setNumero1(valor);
  };

  const actualizarN2 = (valor: number) => {
    setNumero2(valor);
  };

  const sumar = () => {
    const s = numero1 + numero2;
    setResultado(s);
  };

  useEffect(() => {
    sumar();
  }, [numero1, numero2]);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>numero 1</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingresar numero 1"
            onChange={(n1) => {
              actualizarN1(parseInt(n1.currentTarget.value));
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>numero 2</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingresar numero 2"
            onChange={(n2) => {
              actualizarN2(parseInt(n2.currentTarget.value));
            }}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={sumar}>
          Sumar
        </Button>
        <br></br>
        <Form.Group>
          <Form.Label>resultado</Form.Label>
          <Form.Control
            type="number"
            placeholder="resultado"
            value={resultado}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Pagina2;
