/* eslint-disable react/prop-types */

import { useState } from "react";
import Message from "./Message";

const Form = ({ show }) => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [flag, setFlag] = useState(false);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
        if (!emailRegex.test(customer.email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setErrorMessage("");
    console.log("Formulario enviado con éxito");
    setFlag(true);
  };


  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleEmail = (e) => {
    setCustomer({ ...customer, email: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={customer.name} onChange={handleName} />
        <label>Email: </label>
        <input type="email" value={customer.email} onChange={handleEmail} />
        <button>Entradas para {show.artista}</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {flag ? <Message name ={customer.name} email = {customer.email}></Message> : null}
    </div>
  );
};

export default Form;
