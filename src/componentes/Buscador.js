import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Buscador({ newLocalizacion }) {
  const [ciudad, setCiudad] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ciudad });
    if (ciudad === "" || !ciudad) return;

    newLocalizacion(ciudad);
  };

  return (
    <Form className="contBuscador" onSubmit={onSubmit}>
      <Form.Control
        id="formSearch"
        type="text"
        placeholder="Ciudad"
        onChange={(e) => setCiudad(e.target.value)}
      />
      <Button variant="dark" type="submit">
        Buscar
      </Button>
    </Form>
  );
}

export default Buscador;
