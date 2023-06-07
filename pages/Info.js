import ur from "../images/SVG/ur.svg";
import bil from "../images/SVG/bil.svg";
import pris from "../images/SVG/pris.svg";
import book from "../images/SVG/grill.svg";
import one from "../images/SVG/nota.svg";
import faq from "../images/SVG/faq.svg";
import kundeservice from "../images/SVG/kundeservice.svg";
import privat from "../images/SVG/privat.svg";
import arrow from "../images/SVG/forwardarrow.svg";
import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";

export default function Info() {
    return(
        <main>
        <div className="top-bar">
            <div>
            <NavLink to="/konto"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Info</h3>
            </div>
        </div>

        <div className="info-tekst">
            <h2>Information</h2>
         </div>

         <div className="liste-item">
            <div>
            <img src={ur} alt="åbningstider" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Åbningstider</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={pris} alt="pris-skilt"/>
            </div>
            <div className="menu-item">
            <h3><NavLink to="/" className="link_text">Priser</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <NavLink to="/"><img src={bil} alt="bil-ikon" className=""/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Parkering</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <NavLink to="/grillomraader" ><img src={book} alt="grill-ikon"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/grillomraader" className="link_text">Book grillområde</NavLink></h3>
            </div>
            <div>
            <NavLink to="/bookinger" ><img src={one} alt="antal-bookinger"/></NavLink>
            </div>
            <div>
            <NavLink to="/grillområder" ><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink> 
            </div>
            </div>

        <br/>
            <div className="info-tekst">
            <h2>Hjælp</h2>
            </div>

            <div className="liste-item">
            <div>
            <img src={faq} alt="spørgsmålstegn" className="faq-ikon"/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">FAQ</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={kundeservice} alt="kundeservice-ikon" className="kundeservice-ikon"/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Kundeservice</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={privat} alt="privatlivsoplitik" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Privatlivspolitik</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>
     </main>
    )
}