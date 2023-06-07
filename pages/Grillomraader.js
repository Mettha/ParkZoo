import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import one from "../images/SVG/one.svg";
import grill from "../images/SVG/hvid-mini-grill.svg";
import soebred from "../images/soebred.png";
import vandhul from "../images/vandhullet.png";
import skovbryn from "../images/skovbryn.png";
import lysning from "../images/lysning.png";
import sletten from "../images/sletten.png";
import savanne from "../images/savanne.png";

export default function Grillomraader() {
    return(
        <main>
             <div className="top-bar">
             <div>
            <NavLink to="/konto"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Book grillområde</h3>
            </div>
        </div>
        
        <div className="info-sec">
            <div className="info-tekst">
            <h2>Book grillområde</h2>
            </div>
            <div>
            <NavLink to="/bookinger"><img src={one} alt="antal-bookinger" className="aftaler-knap"/></NavLink>
            </div>
        </div>

        <div className="info-sec">
            <div className="info-tekst">
            <p>Tilbered og nyd din medbragte mad <br/> i et af vores stemningsfyldte grillområder.</p>
        </div>
        </div>
        <hr/>
        <div>
            <h3>Vælg område</h3>
        </div>

    <div className="grill-cards">
        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-water">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Søbredden</h3> <img src={soebred} alt="soebred" className="grill-pic" /></button></NavLink>
        </div>

        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-water">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Vandhullet</h3> <img src={vandhul} alt="vandhul" className="grill-pic" /></button></NavLink>
        </div>
    </div>

    <div className="grill-cards">
        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-forest">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Skovbrynet</h3> <img src={skovbryn} alt="skovbryn" className="grill-pic" /></button></NavLink>
        </div>

        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-forest">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Lysningen</h3> <img src={lysning} alt="Lysning-i-skov" className="grill-pic" /></button></NavLink>
        </div>
    </div>

    <div className="grill-cards">
        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-dirt">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Sletten</h3> <img src={sletten} alt="Slette" className="grill-pic" /></button></NavLink>
        </div>

        <div>
        <NavLink to="/booking" className="link_text"><button className="grill-button-dirt">
        <img src={grill} alt="grill-ikon" className=""/> 
        <h3>Savannen</h3> <img src={savanne} alt="Savanne" className="grill-pic" /></button></NavLink>
        </div>
    </div>

    </main>
)
}