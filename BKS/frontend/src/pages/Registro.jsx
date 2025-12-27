// Importaciones necesarias
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

// Importaciones de imagenes
import Logo from "../assets/LogoEjemplo.png"

// Pages o componentes necesarios
import LoadingOverlay from "../components/LoandingOverlay";

// css
import "../css/Registro.css";

// Alertas
import Swal from "sweetalert2";

export default function Registro(){

    
    // Loadings
    const [cargaRegresar, setCargaRegresar] = useState(false);
    const [cargaLogin, setCargaLogin] = useState(false);

    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (!password || !confirmPassword) {
    //         Swal.fire("Error", "Completa todos los campos", "error");
    //         return;
    //     }

    //     if (!regex.test(password)) {
    //         Swal.fire(
    //         "Contraseña insegura",
    //         "Debe tener letras, números y un símbolo",
    //         "warning"
    //         );
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         Swal.fire("Error", "Las contraseñas no coinciden", "error");
    //         return;
    //     }

    //     // ✅ Todo OK
    //     setCarga(true);
    //     // aquí va la petición
    // };

    const handelLogin = async () => {
        setCargaRegresar(true);

        setTimeout(() =>{
            navigate("/login");
        }, 1500);
    }

    // Loading para regresar
    const handelRegresar = async () => {
        setCargaLogin(true);

        setTimeout(() =>{
            navigate("/");
        }, 1500);
    };
    return(
        <>
            <LoadingOverlay visible={cargaRegresar} text="Cargando..."/>
            <LoadingOverlay visible={cargaLogin} text="Cargando..."/>
            <div className="Pagina-Principal">
                <aside className="SubPagina">
                    <div className="Bloque_uno">
                        <h1>Crear cuenta nueva</h1>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="Bloque_dos">
                        <form className="FormularioRegistro">
                            <h4 className="TituloFormulario">Llena los datos para continuar con tu cuenta</h4>
                            <label htmlFor="">Nombres: </label>
                            <input type="text" placeholder="Julian Daniel" className="Campo" required/>

                            <label htmlFor="">Apellidos: </label>
                            <input type="text" placeholder="Beltran Bustos"  className="Campo" required/>

                            <label htmlFor="">Correo Electronico: </label>
                            <input type="email" placeholder="ejemplo@dominio.com"  className="Campo" required/>

                            <label htmlFor="">Confirmar Correo Electronico: </label>
                            <input type="email" placeholder="ejemplo@dominio.com"  className="Campo" required/>

                            
                            <label htmlFor="">Contraseña: </label>
                            <div className="campo-password">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="1234567"
                                    className="Campo"
                                    required
                                />
                                <span className="toggle" onClick={() => setShowPass(!showPass)}>
                                    <i className={showPass ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                </span>
                            </div>

                            <label htmlFor="">Confirmar Contraseña: </label>
                            <div className="campo-password">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="1234567"
                                    className="Campo"
                                    required
                                />
                                <span className="toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                </span>
                            </div>

                            <div className="ayuda">
                                <button type="button" className="pregunta" onClick={handelLogin} disabled={cargaLogin}>¿Ya tienes cuenta? <span className="Crear">Inicia Sesión</span></button>
                            </div>

                            <div className="Botones">
                                <button type="submit" className="BTN">Crear cuenta</button>
                                <button type="button" className="BTN" onClick={handelRegresar} disabled={cargaRegresar}>{cargaRegresar ? "Regresando..." : "Regresar"}</button>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>
        </>
    )
}