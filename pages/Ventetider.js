import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import arrow from "../images/SVG/forwardarrow.svg";
import stop from "../images/SVG/stopur.svg";
import karusel from "../images/SVG/karusel.svg";
import bull from "../images/SVG/bull.svg";
import minibil from "../images/SVG/minibil.svg";
import pony from "../images/SVG/pony.svg";
import baad from "../images/SVG/båd.svg";
import tog from "../images/SVG/tog.svg";

export default function Ventetider() {
    return(
        <main>
             <div className="top-bar">
            <div>
            <NavLink to="/konto"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Ventetider</h3>
            </div>
        </div>

        <div className="info-tekst">
            <h2>Ventetider</h2>
        </div>

            <div className="liste-item">
            <div>
            <img src={karusel} alt="heste-karrusel" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Hestekarrusel</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 0 min. </figcaption>
            </figure>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={bull} alt="bulldozer" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Bulldozere</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop-bu">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 5 min. </figcaption>
            </figure>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={minibil} alt="minibiler" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Minibiler</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop-m">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 10 min. </figcaption>
            </figure>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={pony} alt="hest-med-rytter" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Ponyridning</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop-p">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 15 min. </figcaption>
            </figure>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={baad} alt="baad" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/baadene" className="link_text">Bådene</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop-b">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 10 min. </figcaption>
            </figure>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={tog} alt="tog" className=""/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Toget</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div className="stop-t">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 15 min. </figcaption>
            </figure>
            </div>
            </div>
        </main>
    )
}