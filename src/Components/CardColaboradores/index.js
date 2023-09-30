import "./cardColaboradores.css";

const CardColaboradores = ( props ) =>{

    const { nombre, puesto, foto, equipo } = props.datos
    const { colorPrimario } = props
    return(
        <section className="containerColaborador" style={ { backgroundColor: colorPrimario } }>
            <div className="encabezadoColaborador">
                <img src={ foto } alt={ nombre }/>
                <div className="infoColaborador">
                    <h3>{ nombre}</h3>
                    <h4>{ puesto }</h4>
                </div>
            </div>
        </section>
    )
}

export default CardColaboradores;