// CSS
import "../css/Footer.css"


// Importaciones de imagenes
import LogoEjemplo from "../assets/LogoEjemplo.png"

export default function footer(){
    

    return (
        <>
            <footer className="Footer"> 
                <div className="Bloque_Logo">
                <   img src={LogoEjemplo} alt="Logo empresarial" />
                </div>
                <div className="Bloque_Info">
                    <p>Panadería El Trigo de Oro</p>

                    <p>"Tradición y sabor en cada mordisco"</p>

                    <p>© 2025 Todos los derechos reservados.</p>
                </div>
                <div className="Bloque_Redes"> github</div>
            </footer>
            
            
        </>
    )
}