import React from "react";
import { useForms } from "../hooks/useForms";
import { Loader } from "./Loader";

const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

const validaciones = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }

  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electronico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener minimo 1 caracter y maximo 255 caracteres";
  }

  return errorsFormulario;
};
const ContactForm = () => {
  const { form, errores, manejadorCambios, manejadorSalidaInput } = useForms(
    valorDefecto,
    validaciones
  );

  const enviarFormulario = () => {
    console.log("Enviando form...");
  };

  return (
    <>
      <h1>Formulario de contacto</h1>
      <form onSubmit={enviarFormulario}>
        <p>Nombre</p>
        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre..."
          required
          value={form.nombre}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.nombre && <p className="p-error">{errores.nombre}</p>}
        {/*Email */}
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu correo electronico..."
          required
          value={form.email}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.email && <p className="p-error">{errores.email}</p>}

        {/*Asunto */}
        <p>Asunto</p>
        <input
          type="text"
          name="asunto"
          placeholder="Asunto ..."
          required
          value={form.asunto}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.asunto && <p className="p-error">{errores.asunto}</p>}

        {/*Observaciones */}
        <p>Observaciones</p>
        <textarea
          name="observaciones"
          placeholder=" Escribe tus observaciones..."
          required
          cols={50}
          rows={5}
          value={form.observaciones}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.observaciones && (
          <p className="p-error">{errores.observaciones}</p>
        )}

        {/*Button*/}

        <input type="submit" value={"enviar"} />
      </form>
    </>
  );
};

export default ContactForm;
