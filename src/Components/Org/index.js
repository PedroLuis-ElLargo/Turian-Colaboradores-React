
import "./org.css"

const OrgAdd = ( props ) =>{
    
    return (
        <section className="sectionOrg">
            <h1 className="titleOrg">Mi Organización</h1>
            <img className="imgOrg" src="/Img/add.png" alt="AddImage" onClick={ props.cambiarMostrar } />
        </section>
    )
}

export default OrgAdd;