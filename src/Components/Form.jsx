/* eslint-disable react/prop-types */

import { useState } from "react";
import Message from "./Message";

const Form = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [flag, setFlag] = useState(false);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
        if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setErrorMessage("");
    console.log("Formulario enviado con éxito");
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Entradas para {show.artista}</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {flag ? <Message name ={name} email = {email}></Message> : null}

    </div>
  );
};

export default Form;
