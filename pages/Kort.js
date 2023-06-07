import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import kort from "../images/park-2.png";
import pin from "../images/SVG/map-pin.svg";
import toilet from "../images/SVG/toilet-ikon.svg";
import kaffe from "../images/SVG/kaffe-ikon.svg";
import bestik from "../images/SVG/bestik-ikon.svg";
import grillmap from "../images/SVG/grill-map.svg";
import find from "../images/SVG/find-my-kid.svg";
import luk from "../images/SVG/close.svg";
import modalkort from "../images/SVG/indtjek.svg";
import React, { useState } from "react";

export default function Kort() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      // if modalboks er åben add class .active-model som har css overflow-hidden (altså scrollbar er usynlig)
      document.body.classList.add('active-modal')
    } else {
      // hvis modalboks ikke er åben fjernes class .active-model som har css overflow-hidden (altså scrollbar er synlig)
      document.body.classList.remove('active-modal')
    }

    return(
        
    <main>
    <div className="top-bar">
       <div>
       <NavLink to="/konto"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
       </div>
       <div>
       <h3>kort</h3>
       </div>
   </div>

   <div>
        <img src={kort} alt="kort-over-parken" className="kort-pic"/>
    </div>

    <div>
        <img src={pin} alt="kort-pin" className="kort-pin"/>
    </div>

    <div className="sidebar">
        <button><img src={toilet} alt="toilet-ikon" className="m-ikon"/></button>
        <button><img src={kaffe} alt="kaffe-ikon" className="m-ikon"/></button>
        <button><img src={bestik} alt="spise-ikon" className="m-ikon"/></button>
        <button><img src={grillmap} alt="grill-ikon" className="m-ikon"/></button>
        <button onClick={toggleModal} className="btn-modal"><img src={find} alt="familie-lokation-ikon" className="m-ikon"/></button>
    </div>

    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className=""></div>
          <div className="modal-content-map">
            <img src={modalkort} alt="kort" className="tjekind"/>
          </div>
        </div>
      )}

   </main>
    )
}