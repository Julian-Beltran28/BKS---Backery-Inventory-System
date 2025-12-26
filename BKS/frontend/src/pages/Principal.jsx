// Importaciones necesarias
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importaciones de imagenes
import Logo from "../assets/Logo_de_panaderia.avif";
import Panes from "../assets/panes.jpg";

// Css
import "../css/Principal.css";
// Componenetes y paginas necesarias
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoandingOverlay";

export default function Principal()  {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handelLogin = async () => {
        setLoading(true);

        setTimeout(() =>{
            navigate("/login");
        }, 1500);
    };
    const handelRegistro = async () => {
        setLoading(true);

        setTimeout(() =>{
            navigate("/register");
        }, 1500);
    };

    return (
        <> 
            <LoadingOverlay visible={loading} text="Cargando..."/>
            <div className='Pagina-Principal'>
                {/* Titulo prinicpal de la pagina */}
                <header >
                    <h1 className="Titulo-BKS  ">BKS Bakery -- Donde la innovación y el sabor se encuentran</h1>
                </header>

                {/* Botones de inicio y registro para el usuario */}
                <main>
                    <div className="BotonesPrincipales">
                        {/* Loading */}
                        <button className="Iniciar"
                        onClick={handelLogin}
                        disabled={loading}>Iniciar sesión
                        </button>
                        
                        <button className="Registro"
                        onClick={handelRegistro}
                        disabled={loading}>Registrarse</button>
                    </div>
                    
                    <section className="Seccion1">
                        <div className="Bloque_imagen">
                            <img src={Logo} alt="imagen 1" />
                        </div>

                        <div className="Bloque_texto">
                            <p>En BKS Bakery, reinventamos la panadería tradicional con una propuesta moderna y saludable.

                            <p>Nuestros productos están elaborados con ingredientes naturales, procesos controlados y un compromiso real con la excelencia.</p>

                            <p>Cada pieza de pan refleja equilibrio, frescura y el arte de hacer las cosas bien.</p>
                        </p>
                        </div>
                        
                    </section>

                    <section className="Seccion2">
                        <div className="Bloque_texto2">

                            <p>BKS nació con una visión clara: unir la pasión por la panadería artesanal con la innovación tecnológica.</p>

                            <p>Desde la gestión precisa de nuestras recetas hasta la experiencia de compra digital, controlamos cada detalle para garantizar productos frescos, saludables y consistentes.</p>

                            <p>Nuestra meta es simple: ofrecer un pan que alimente, inspire y conquiste los sentidos.</p>

                            <p>Con BKS, disfrutar de lo saludable nunca había sido tan sofisticado.</p>
                        </div>

                        <div className="Bloque_imagen2">
                            <img src={Panes} alt="imagen 2" />   
                        </div>

                    </section>

                    <section className="Seccion3">
                        <h4 className="Titulo_catalogo">Catalogo Principal</h4>
                        {/* Falta realizar maps para las cards */}
                    </section>
                </main>
                
                
                {/* Cards de los productos principales */}

                <div className="footer-con">
                    <Footer />
                </div> 
            </div>
        </>
    )
}