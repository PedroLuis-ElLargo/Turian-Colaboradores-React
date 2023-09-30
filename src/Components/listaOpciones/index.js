
const ListaOpciones = ( props ) =>{

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return(
        <div>
            <label htmlFor="equipo">Equipo</label>
            <select onChange={ manejarCambio } value={ props.valor }>
                { props.equipo.map( ( equipo, index ) => {
                    return(
                        <option key={ index } value={equipo} >{ equipo }</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ListaOpciones;