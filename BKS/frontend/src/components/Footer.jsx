// CSS
import "../css/Footer.css"

// Importaciones de imagenes
import LogoEjemplo from "../assets/LogoEjemplo.png"

export default function footer(){
    

    return (
        <>
            <footer className="Footer"> 
                <div className="Bloque_Logo">
                    <img src={LogoEjemplo} alt="Logo empresarial" />
                </div>
                <div className="Bloque_Info">
                    <p>Panadería El Trigo de Oro</p>

                    <p>"Tradición y sabor en cada mordisco"</p>

                    <p>© 2025 Todos los derechos reservados.</p>
                </div>
                <div className="Bloque_Redes">
                    {/* GITHUB */}
                    <a 
                        href="https://github.com/Julian-Beltran28" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="red-social"
                    >
                    <i className='bx bxl-github icon3'></i>
                    <span>Github</span>
                    </a>

                    {/* DISCORD */}
                    <a
                        href="https://discord.com/channels/828341060320755733/828341871695626290"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="red-social"
                    >
                    <i className="bx bxl-discord icon3"></i>
                    <span>Discord</span>
                    </a>

                    {/* GMAIL */}
                    <a 
                        href="mailto:julianbeltran081@gmail.com" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="red-social"
                    >
                    <i className='bx bxl-gmail icon3' ></i>
                    <span>Gmail</span>
                    </a>

                    {/* WHATSAPP */}
                    <a 
                        href="https://wa.me/3226600792" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="red-social"
                    >
                    <i className='bx bxl-whatsapp-square icon3' ></i>
                    <span>Whatsapp</span>
                    </a>
                </div>
            </footer>
            
            
        </>
    )
}