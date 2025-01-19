import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importa EmailJS
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    detalle: "",
  });

  const [isSending, setIsSending] = useState(false); // Estado para mostrar envío en progreso

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Parámetros que coinciden con tu plantilla en EmailJS
    const templateParams = {
        to_name: "Destino",
        from_name: `${formValues.nombre} ${formValues.apellidos}`,
        email: formValues.email,
        telefono: formValues.telefono,
        message: formValues.detalle,
      };
      

    // Envío a través de EmailJS
    emailjs
      .send(
        "service_j7olwi8", // ID del servicio
        "template_jgy1mro", // ID de la plantilla
        templateParams,
        "_2GB38BG4nUmZz50X" // Clave pública
      )
      .then((response) => {
        console.log("Correo enviado con éxito:", response.status, response.text);
        alert("¡Correo enviado con éxito!");
        setFormValues({
          nombre: "",
          apellidos: "",
          email: "",
          telefono: "",
          detalle: "",
        });
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el correo. Inténtalo de nuevo.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="contact-form-container-super">
      <h2 className="contact-form-title">
        Cotiza con nosotros y consigue tu viaje de ensueño
      </h2>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre(s)</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formValues.apellidos}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formValues.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="detalle">Detalle</label>
            <textarea
              id="detalle"
              name="detalle"
              value={formValues.detalle}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="form-submit-button"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
