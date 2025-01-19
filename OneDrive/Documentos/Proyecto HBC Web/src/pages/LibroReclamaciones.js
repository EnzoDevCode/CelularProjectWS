import React, { useState } from "react";
import ImageBackground from "../components/ImageBackground";
import VerticalSeparator from "../components/VerticalSeparator";
import imageheader from "../images/images-paquetes/aventura-selva.jpg";
import "../styles/LibroReclamaciones.css";

const LibroReclamaciones = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombrePadre: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    correo: "",
    telefono: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
    areaReclamo: "Atención al cliente",
    fechaIncidencia: "",
    productoServicio: "",
    monto: "",
    tipoReclamo: "Reclamo",
    motivo: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const email = "jalvareza21_1@unc.edu.pe"; // Cambia esto a tu correo
    const subject = `Reclamo de ${formValues.nombre}`;
    const body = `
      Datos Personales:
      Nombre: ${formValues.nombre} ${formValues.apellidoPaterno} ${formValues.apellidoMaterno}
      Nombre Padre/Madre: ${formValues.nombrePadre}
      Tipo de Documento: ${formValues.tipoDocumento}
      N° de Documento: ${formValues.numeroDocumento}
      Correo Electrónico: ${formValues.correo}
      Teléfono/Celular: ${formValues.telefono}

      Ubicación del Incidente:
      Departamento: ${formValues.departamento}
      Provincia: ${formValues.provincia}
      Distrito: ${formValues.distrito}
      Dirección: ${formValues.direccion}

      Datos del Incidente:
      Área de Reclamo: ${formValues.areaReclamo}
      Fecha de Incidencia: ${formValues.fechaIncidencia}
      Producto o Servicio: ${formValues.productoServicio}
      Monto: ${formValues.monto}
      Tipo de Reclamo: ${formValues.tipoReclamo}
      Motivo: ${formValues.motivo}
      Descripción: ${formValues.descripcion}
    `;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <ImageBackground url={imageheader} />
      <VerticalSeparator altura="10" />

      <div className="reclamaciones-container">
        <Section title="Datos Personales">
          <InputRow
            label1="Nombre(s)"
            name1="nombre"
            label2="Apellido Paterno"
            name2="apellidoPaterno"
            label3="Apellido Materno"
            name3="apellidoMaterno"
            handleChange={handleChange}
          />
          <InputField
            label="Nombre Padre o Madre (menores de edad)"
            name="nombrePadre"
            handleChange={handleChange}
          />
          <InputRow
            label1="Tipo"
            name1="tipoDocumento"
            selectOptions1={["DNI", "Pasaporte"]}
            label2="N° de Documento"
            name2="numeroDocumento"
            handleChange={handleChange}
          />
          <InputRow
            label1="Correo Electrónico"
            name1="correo"
            label2="Teléfono / Celular"
            name2="telefono"
            handleChange={handleChange}
          />
        </Section>

        <Section title="Ubicación del Incidente">
          <InputRow
            label1="Departamento"
            name1="departamento"
            label2="Provincia"
            name2="provincia"
            label3="Distrito"
            name3="distrito"
            handleChange={handleChange}
          />
          <InputField
            label="Dirección"
            name="direccion"
            handleChange={handleChange}
          />
        </Section>

        <Section title="Datos del Incidente">
          <InputRow
            label1="Área de reclamo"
            name1="areaReclamo"
            selectOptions1={["Atención al cliente", "Otro"]}
            label2="Fecha de incidencia"
            name2="fechaIncidencia"
            date2={true}
            handleChange={handleChange}
          />
          <InputRow
            label1="Producto o servicio"
            name1="productoServicio"
            label2="Monto"
            name2="monto"
            label3="Reclamo o Queja"
            name3="tipoReclamo"
            selectOptions3={["Reclamo", "Queja"]}
            handleChange={handleChange}
          />
          <InputField
            label="Motivo de reclamo o queja"
            name="motivo"
            handleChange={handleChange}
          />
          <InputField
            label="Descripción de la Incidencia"
            name="descripcion"
            handleChange={handleChange}
            textarea
          />
        </Section>

        <button type="button" className="submit-button" onClick={handleSendEmail}>
          PRESENTAR RECLAMO
        </button>
      </div>
      <VerticalSeparator altura="10" />
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const InputRow = ({
  label1,
  name1,
  label2,
  name2,
  label3,
  name3,
  selectOptions1,
  selectOptions3,
  date2,
  handleChange
}) => (
  <div className="input-row">
    {label1 && (
      <div className="input-field">
        <label>{label1}</label>
        {selectOptions1 ? (
          <select name={name1} onChange={handleChange}>
            {selectOptions1.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input type="text" name={name1} onChange={handleChange} />
        )}
      </div>
    )}
    {label2 && (
      <div className="input-field">
        <label>{label2}</label>
        {date2 ? (
          <input type="date" name={name2} onChange={handleChange} />
        ) : (
          <input type="text" name={name2} onChange={handleChange} />
        )}
      </div>
    )}
    {label3 && (
      <div className="input-field">
        <label>{label3}</label>
        {selectOptions3 ? (
          <select name={name3} onChange={handleChange}>
            {selectOptions3.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input type="text" name={name3} onChange={handleChange} />
        )}
      </div>
    )}
  </div>
);

const InputField = ({ label, name, handleChange, textarea }) => (
  <div className="input-field">
    <label>{label}</label>
    {textarea ? (
      <textarea name={name} onChange={handleChange} />
    ) : (
      <input type="text" name={name} onChange={handleChange} />
    )}
  </div>
);

export default LibroReclamaciones;
