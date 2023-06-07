import backarrow from "../images/SVG/backarrow.svg";
import add from "../images/SVG/addbutton.svg";
import anders from "../images/anders.svg";
import line from "../images/line.svg";
import victor from "../images/victor.svg";
import mille from "../images/mille.svg";
import arrow from "../images/SVG/forwardarrow.svg";
import { NavLink } from "react-router-dom";

export default function Armbaand() {
    return(
        <main>
             <div className="top-bar">
             <div>
            <NavLink to="/"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Mine armbånd</h3>
            </div>
        </div>
        
        <div className="info-sec">
            <div className="info-tekst">
            <h2>Mine armbånd</h2>
            <p>Du har 4 aktive armbånd <br/> tilknyttet denne konto.</p>
            </div>
            <div>
            <NavLink to="/"><img src={add} alt="tilføj-nyt-armbaand" className="add-knap"/></NavLink>
            </div>
         </div>
        <br></br>
        <br></br>
         <div className="liste-item">
            <div>
            <NavLink to="/"><img src={anders} alt="anders-profil-billede" className="anderspic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Anders</NavLink></h3>
            </div>
            <div>
            <NavLink to="/"><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink>
            </div>
            </div>

            <br/>

            <div className="liste-item">
            <div>
            <NavLink to="/"><img src={line} alt="line-profil-billede" className="linepic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Line</NavLink></h3>
            </div>
            <div>
            <NavLink to="/"><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink>
            </div>
            </div>

            <br/>

            <div className="liste-item">
            <div>
            <NavLink to="/"><img src={victor} alt="victor-profil-billede" className="victorpic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/victor" className="link_text">Victor</NavLink></h3>
            </div>
            <div>
            <NavLink to="/"><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink>
            </div>
            </div>

            <br/>

            <div className="liste-item">
            <div>
            <NavLink to="/"><img src={mille} alt="mille-profil-billede" className="millepic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/mille" className="link_text">Mille</NavLink></h3>
            </div>
            <div>
            <NavLink to="/"><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink>
            </div>
            </div>
        </main>
    )
}