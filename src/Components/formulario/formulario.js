import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto";
import ListaOpciones from "../listaOpciones";
import BtnCrear from "../boton";

const Formulario = ( props ) => {

    const [ nombre, actualizarNombre ] = useState("");
    const [ puesto, actualizarPuesto ] = useState("");
    const [ foto, actualizarFoto ]     = useState("");
    const [ equipo, actualizarEquipo ] = useState("");

    const manejarEnvio = ( e ) => {
        e.preventDefault()
        let datosAEnviar = {
          nombre,
          puesto,
          foto,
          equipo,
        }
        props.registrarColaborador( datosAEnviar );
    }

  return (
    <section className="container">
      <form className="form" onSubmit={ manejarEnvio }>
        <h1>Rellena los campos requeridos</h1>
        <CampoTexto 
          titulo="Nombre" 
          placeholder="Ingrese el nombre" 
          valor={ nombre } 
          actualizarValor={ actualizarNombre } 
        />

        <CampoTexto 
          titulo="Puesto" 
          placeholder="Ingrese el puesto" 
          valor={ puesto } 
          actualizarValor={ actualizarPuesto } 
        />

        <CampoTexto 
          titulo="Foto URL" 
          placeholder="URL de la image" 
          valor={ foto } 
          actualizarValor={ actualizarFoto } 
        />

        <ListaOpciones 
          equipo={ props.equipos } 
          valor={ equipo } 
          actualizarEquipo={ actualizarEquipo } 
        />

        <BtnCrear>Crear</BtnCrear>
      </form>
    </section>
  );
}

export default Formulario;
