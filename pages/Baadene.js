import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import baade from "../images/baade.png";
import baad from "../images/SVG/båd.svg";
import stop from "../images/SVG/stopur.svg";
import baadkort from "../images/kort-baad.svg";

export default function Baadene() {
    return(
        <main>
             <div className="top-bar">
            <div>
            <NavLink to="/ventetider"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Bådene</h3>
            </div>
        </div>

        <div>
        <img src={baade} alt="baadene-ved-bro" className="baade"/> 
        </div>

        <div className="liste-item">
            <div>
            <img src={baad} alt="baad" className=""/>
            </div>
            <div className="menu-item">
                <h3>Bådene</h3>
            </div>
            <div className="stop-b">
            <figure>
            <img src={stop} alt="stop-ur"/>
            <figcaption> 10 min. <br/> Køtid </figcaption>
            </figure>
            </div>
            </div>
            <hr/>
         <div className="info-tekst">
            <h4>Restriktioner</h4>
            <p>max 2 voksne og 1 barn pr. båd</p>
         </div>
         <hr/>
         <br/>
         <div>
            <p>Nyd en sejltur med familien på zoo-søen</p>
         </div>
         <div>
        <img src={baadkort} alt="kort-over-baadene" className="bådkort"/> 
        </div>

        </main>
    )
}