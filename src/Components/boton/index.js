import "./boton.css"

const BtnCrear = ( props ) =>{
    return(
        <button className="btnCrear">{ props.children }</button>
    )
}

export default BtnCrear;