import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import nfc from "../images/SVG/phoneconnect.svg";
import victor from "../images/victor.svg";

export default function Forbind() {
    return(
        <main>
        <div className="top-bar">
        <div>
       <NavLink to="/overfoer"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
       </div>
       <div>
       <h3>Forbind</h3>
       </div>
   </div>
   
   <div>
       <div className="info-tekst">
       <h2>Hold telefonen tæt <br/> på armbåndet</h2>
       </div>
    <br></br>
    <br></br>
       <div>
       <NavLink to="/bekraeft"><img src={nfc} alt="smartphone-nfc-forbindelse-til-armbaand" className="nfc-forbind"/></NavLink>
       </div>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <div>
            <div>
            <NavLink to="/"><img src={victor} alt="victor-profil-billede" className="victorpic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/victor" className="link_text">Victor</NavLink></h3>
            </div>
            </div>
    <br></br>
    <div>
    <NavLink to="/tankop" className="link_text"><button className="btn-no">Afbryd</button></NavLink>
   </div>
   <br></br>
   </main>
    )
}