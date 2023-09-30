import "./equipo.css";
import CardColaboradores from "../CardColaboradores"

const Equipo = ( props ) =>{

    // destructuracion de los datos
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores } = props

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={ { backgroundColor: colorSecundario } }>
                <h2 style={ { borderColor: colorPrimario } }>{ titulo }</h2>
                <div className="equipo-container">
                    { 
                        colaboradores.map( ( colaborador, index ) => <CardColaboradores 
                                                                        datos={ colaborador } 
                                                                        key={ index } 
                                                                        colorPrimario={ colorPrimario }
                                                                    /> )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;
