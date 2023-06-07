import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import miniklip from "../images/SVG/miniklip.svg";
import coin from "../images/SVG/coin.svg";

export default function Tankop() {
    return(
        <main>
             <div className="top-bar">
             <div>
            <NavLink to="/victor"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Tank op</h3>
            </div>
        </div>
        
        <div className="info-sec">
            <div className="info-tekst">
            <h2>Victor</h2>
            <p>Armbånd med børnebillet</p>
            <h4>Saldo kr. = 100 <br/> Saldo klip = 5</h4>
            </div>
        </div>
        <hr/>

        <div>
            <h3>Indsæt</h3>
            </div>

    <div className="button-cards">
        <div>
        <NavLink to="/overfoer" className="link_text"><button>
        <img src={miniklip} alt="klippekortikon" className=""/> 
        <h4>5 klip = 25 kr.</h4></button></NavLink>
        </div>

        <div>
        <button>
        <img src={miniklip} alt="klippekortikon" className=""/> 
        <h4>11 klip = 50 kr.</h4></button>
        </div>
        </div>

        <div className="button-cards">
        <div>
        <button>
        <img src={coin} alt="klippekortikon" className=""/> 
        <h4>50 kr.</h4></button>
        </div>

        <div>
        <button>
        <img src={coin} alt="klippekortikon" className=""/> 
        <h4>100 kr.</h4></button>
        </div>
        </div>

        <div className="button-cards">
        <div>
        <button>
        <img src={coin} alt="klippekortikon" className=""/> 
        <h4>200 kr</h4></button>
        </div>

        <div>
        <button>
        <img src={coin} alt="klippekortikon" className=""/> 
        <h4>Andet beløb</h4></button>
        </div>
        </div>

        </main>
)
}