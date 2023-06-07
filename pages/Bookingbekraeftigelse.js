import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import checkmark from "../images/SVG/checkmark.svg";
import book from "../images/SVG/grill.svg";

export default function BookBekraeft() {
    return(
        <main>
        <div className="top-bar">
        <div>
       <NavLink to="/booking"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
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
    <br></br>
    <br></br>
    <div className="">
       <div className="">
       <p>Du har booket området</p> 
       <h4>“Søbredden”</h4>
       <p> kl. 17.15 <br/> mandag <br/> 12. juni.</p>
       </div>
   </div>
<br></br>


<div>
    <div>
     <img src={book} alt="grill-ikon" className="border"/>
    </div>
</div>
<br></br>
<br></br>
<br></br>
   <div>
    <NavLink to="/konto" className="link_text"><button className="btn-go">Afslut</button></NavLink>
   </div>
   <br></br>
   <br></br>

</main>
    )
}