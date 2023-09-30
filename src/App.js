import { useState } from "react"
import './App.css';
import Header from './Components/header/header';
import Formulario from './Components/formulario/formulario';
import OrgAdd from './Components/Org';
import Equipo from "./Components/equipo";
import Footer from "./Components/footer";

  // useState
  // const [nombreVariable, funcionActualiza] = useState( valorInicial );
function App() {
  const [ mostrarFormulario, actualizarMostrar ] = useState( true );
  const[ colaboradores , actualizarColaboradores ] = useState( [] ); 

  const cambiarMostrar = () =>{
    actualizarMostrar( !mostrarFormulario )
  } 
  const registrarColaborador = ( colaborador ) => {
    console.log( "nuevo colaborador", colaborador );
    actualizarColaboradores( [...colaboradores, colaborador ] )
    actualizarMostrar( false )

  }

  // lista de equipos de la empresa
  const equipos = [
    {
      titulo: "Atencion al Cliente",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Diseño Grafico",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Bordado",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Terminacion",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
  ]
  return (
    <div className="App">
      <Header />
      { 
        mostrarFormulario === true ? 
        <Formulario equipos={ equipos.map( ( equipo ) => equipo.titulo )} registrarColaborador={ registrarColaborador } /> : 
        <div className="ocultoFormulario"></div>

        // mostrarFormulario && <Formulario
        //   equipos={equipos.map((equipo) => equipo.titulo)}
        //   registrarColaborador={registrarColaborador}
        // />
      }
      <OrgAdd cambiarMostrar={ cambiarMostrar } />

      {
        equipos.map( ( equipos ) => <Equipo 
                                      datos={ equipos } 
                                      key={ equipos.titulo }
                                      colaboradores={ colaboradores.filter( colaborador => colaborador.equipo === equipos.titulo) }
                                    />)
      }
      <Footer />
    </div>
  );
}

export default App;
