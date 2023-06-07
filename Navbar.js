import { NavLink } from "react-router-dom";
import programikon from "../images/SVG/program.svg";
import koeikon from "../images/SVG/vent.svg";
import kontoikon from "../images/SVG/konto.svg";
import infoikon from "../images/SVG/info.svg";
import kortikon from "../images/SVG/kort-ikon.svg";

export default function Nav(){
    return (
        <nav className="nav-bar">
            <NavLink to="/program"><img src={programikon} alt="program-ikon" className="navikon"/></NavLink>
            <NavLink to="/ventetider"><img src={koeikon} alt="ventetid-ikon" className="navikon"/></NavLink>
            <NavLink to="/konto"><img src={kontoikon} alt="profil-ikon" className="navikon"/></NavLink>
            <NavLink to="/info"><img src={infoikon} alt="info-ikon" className="navikon"/></NavLink>
            <NavLink to="/kort"><img src={kortikon} alt="kort-ikon" className="navikon"/></NavLink>
        </nav>
    )
}