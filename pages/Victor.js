import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import tank from "../images/SVG/tankop.svg";

export default function Victor() {
    return(
        <main>
             <div className="top-bar">
             <div>
            <NavLink to="/armbaand"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Victor</h3>
            </div>
        </div>
        
        <div className="info-sec">
            <div className="info-tekst">
            <h2>Victor</h2>
            <p>Armbånd med børnebillet</p>
            <h4>Saldo kr. = 100 <br/> Saldo klip = 5</h4>
            </div>
            <div>
            <NavLink to="/tankop"><img src={tank} alt="tank-op" className="tankop-knap"/></NavLink>
            </div>
         </div>
         <hr/>
         <div className="info-tekst">
            <p>Seneste aktivitet</p>
            <pre class="tab4">Iskiosken                            20kr                      kl. 14.30</pre>
            <pre class="tab4">Ponyridning                      2 klip                    kl. 13.15</pre>
            <pre class="tab4">Minibiler                             1 klip                    kl. 12.30</pre>
         </div>
         <hr/>
        </main>
)
}