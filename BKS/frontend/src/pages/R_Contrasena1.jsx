// Importaciones necesarias
// Importaciones necesarias
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

// Importaciones de imagenes
import Logo from "../assets/LogoEjemplo.png"

// Pages o componentes necesarios
import LoadingOverlay from "../components/LoandingOverlay";

// CSS
import "../css/RecuperarContrasena.css";


export default function R_Contraseña1(){
    // Loadings
    const [cargaRegresar, setCargaRegresar] = useState(false);
    const [loading, setLoanding] = useState(false);

    // Navegar
    const navigate = useNavigate();

    // Loading (Inicio de sesion)
    const handelRegresar = async () => {
        setCargaRegresar(true);

        setTimeout(() =>{
            navigate("/login");
        }, 1500);
    }

    const handleSimulacion = async () => {
        setLoanding(true);

        setTimeout(() =>{
            navigate("/Recuperar2");
        }, 1500);
    }



    return(
            <>
                <LoadingOverlay visible={cargaRegresar} text="Cargando..."/>
                <LoadingOverlay visible={loading} text="Enviando codigo..."/>
                <div className="Pagina-Principal">
                    <aside className="SubPagina">
                        <div className="Bloque_uno">
                            <h1>Recuperar Contraseña</h1>
                            <img src={Logo} alt="logo" />
                        </div>

                        <div className="Bloque_dos">
                            <form className="FormularioRegistro1">
                                <h4 className="TituloFormulario1">Escribe el correo o numero que registraste para enviarte un codigo de verficacion</h4>

                                <input type="text" className="form-control-custom" placeholder="Correo electronico o numero celular" required/>

                                <div className="Botones">
                                    <button type="submit" className="btn-custom BTN "onClick={handleSimulacion} disabled={loading}>{loading ? "Enviando..." : "Enviar codigo"}</button>
                                    <button type="button" className="BTN" onClick={handelRegresar} disabled={cargaRegresar}>{cargaRegresar ? "Regresando..." : "Regresar"}</button>
                                </div>
                            </form>
                        </div>
                    </aside>
                </div>
            </>
        )
    
}