import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import miniklip from "../images/SVG/miniklip.svg";

export default function Overfoer() {
    return(
        <main>
        <div className="top-bar">
        <div>
       <NavLink to="/tankop"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
       </div>
       <div>
       <h3>Overfør</h3>
       </div>
   </div>
   
   <div className="info-sec">
       <div className="info-tekst">
       <h2>Victor</h2>
       <h4>Du er ved at indsætte 5 klip til 25 kr. <br/> på armbånd: Victor</h4>
       </div>
   </div>

   <div className="button-cards">
        <div>
        <NavLink to="/overfoer" className="link_text"><button>
        <img src={miniklip} alt="klippekortikon" className=""/> 
        <h4>5 klip = 25 kr.</h4></button></NavLink>
        </div>
    </div>

    <div className="">
       <div className="">
       <p>Beløbet vil blive trukket på <br/> kreditkort nr. xxxx-xxxx-5590</p>
       </div>
   </div>
<br></br>
<br></br>
<br></br>
   <div>
    <NavLink to="/forbind" className="link_text"><button className="btn-go">Overfør</button></NavLink>
   </div>
   <br></br>
   <div>
    <NavLink to="/tankop" className="link_text"><button className="btn-no">Annuller</button></NavLink>
   </div>
   <br></br>
   </main>
    )
}