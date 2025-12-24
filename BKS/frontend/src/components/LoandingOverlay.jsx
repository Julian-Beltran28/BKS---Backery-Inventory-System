import PacmanLoader from "react-spinners/PacmanLoader";
import "../css/LoadingOverlay.css"

export default function LoadingOverlay({ visible, text = "Cargando..." }) {
  if (!visible) return null;

  return (
    <div className="loading-overlay">
        <PacmanLoader
        color="#b96707"
        cssOverride={{}}
        loading
        margin={2}
        size={30}
        speedMultiplier={1}
        />
        <p>{text}</p>
    </div>
    );
}
