// Importaciones necesarias
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importaciones de imagenes
import Logo from "../assets/LogoEjemplo.png"

// Pages o componentes necesarios
import LoadingOverlay from "../components/LoandingOverlay";

// css
import "../css/Registro.css";

export default function Registro(){

    const [carga, setCarga] = useState(false);
    const navigate = useNavigate();

    // Loading para regresar
    const handelRegresar = async () => {
        setCarga(true);

        setTimeout(() =>{
            navigate("/");
        }, 1500);
    };
    return(
        <>
            <LoadingOverlay visible={carga} text="Cargando..."/>
            <div className="Pagina-Principal">
                <aside className="SubPagina">
                    <div className="Bloque_uno">
                        <h1>Crear cuenta nueva</h1>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="Bloque_dos">
                        <form className="FormularioRegistro">
                            <input type="text" placeholder="Nombres" required/>
                            <input type="text" placeholder="Apellidos" required/>
                            <input type="email" placeholder="Correo electronico" required/>
                            <input type="email" placeholder="Confirmar correo electronico" required/>
                            <input type="password" placeholder="Contraseña" required/>
                            <input type="password" placeholder="Confirmar contraseña" />

                            <button>Crear cuenta</button>
                            <button onClick={handelRegresar} disabled={carga}>{carga ? "Regresando..." : "Regresar"}</button>
                        </form>
                    </div>
                </aside>
            </div>
        </>
    )
}