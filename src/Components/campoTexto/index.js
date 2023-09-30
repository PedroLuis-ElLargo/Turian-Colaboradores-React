import "./campoTexto.css"

const CampoTexto = ( props ) =>{

    const manejarCambio = ( e ) => {
        props.actualizarValor( e.target.value )
    }

    return(
        <div>
            <label>{ props.titulo }</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre"
                value={ props.valor } 
                placeholder={ props.placeholder} 
                required
                onChange={ manejarCambio }
            />
        </div>
    )
}
export default CampoTexto;