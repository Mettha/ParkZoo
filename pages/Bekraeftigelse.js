import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import checkmark from "../images/SVG/checkmark.svg";
import victor from "../images/victor.svg";

export default function Bekraeft() {
    return(
        <main>
        <div className="top-bar">
        <div>
       <NavLink to="/forbind"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
       </div>
       <div>
       <h3>Bekræftigelse</h3>
       </div>
   </div>
   <br></br>
   <br></br>
   <div>
        <div>
        <img src={checkmark} alt="check-mark" className=""/> 
        </div>
    </div>

    <div className="">
       <div className="">
       <p>Betalingen er gennemført. <br/> Du har indsat 5 klip på <br/> armbånd Victor.</p>
       </div>
   </div>
<br></br>
<br></br>
<div>
            <NavLink to="/"><img src={victor} alt="victor-profil-billede" className="victorpic"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/victor" className="link_text">Victor</NavLink></h3>
            </div>
<br></br>
<br></br>
   <div>
    <NavLink to="/armbaand" className="link_text"><button className="btn-go">Afslut</button></NavLink>
   </div>
   <br></br>
   <br></br>
   </main>
    )
}