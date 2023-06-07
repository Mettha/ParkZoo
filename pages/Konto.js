import personinfo from "../images/SVG/personoplysn.svg";
import billetikon from "../images/SVG/Image 68.svg";
import betalingskort from "../images/SVG/betalingskort.svg";
import armbaand from "../images/SVG/armbaand.svg";
import book from "../images/SVG/grill.svg";
import one from "../images/SVG/nota.svg";
import kundeklub from "../images/SVG/klub.svg";
import qmark from "../images/SVG/q-mark.svg";
import arrow from "../images/SVG/forwardarrow.svg";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import luk from "../images/SVG/close.svg";

export default function Konto() {

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
            <h3>Min konto</h3>
        </div>

        <div className="info-tekst">
            <h2>Hej Anders</h2>
            <p>Her finder du alt det, du behøver <br/> for at få et godt besøg.</p>
         </div>

         <div className="liste-item">
            <div>
            <img src={personinfo} alt="personlige-informationer" className="pers-info"/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Mine oplysninger</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={betalingskort} alt="betalingskortikon"/>
            </div>
            <div className="menu-item">
            <h3><NavLink to="/" className="link_text">Betalingskort</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <NavLink to="/"><img src={billetikon} alt="billetikon" className="billet"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Billetter og årskort</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            </div>

            <div className="liste-item">
            <div>
            <NavLink to="/armbaand"><img src={armbaand} alt="armbånd-ikon" className="armbaand"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/armbaand" className="link_text">Armbånd</NavLink></h3>
            </div>
            <div>
            <NavLink to="/armbaand"><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <NavLink to="/grillomraader" ><img src={book} alt="grill-ikon"/></NavLink>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/grillomraader" className="link_text">Book grillområde</NavLink></h3>
            </div>
            <div>
            <NavLink to="/grillområder" ><img src={arrow} alt="fremad-pil" className="forwardarrow"/></NavLink> 
            </div>
            <div>
            <NavLink to="/bookinger" ><img src={one} alt="antal-bookinger" className="one"/></NavLink>
            </div>
            </div>

            <div className="liste-item">
            <div>
            <img src={kundeklub} alt="kundeklubikon" className="klub-ikon"/>
            </div>
            <div className="menu-item">
                <h3><NavLink to="/" className="link_text">Kundeklub</NavLink></h3>
            </div>
            <div>
            <img src={arrow} alt="fremad-pil" className="forwardarrow"/> 
            </div>
            <div>
            <button onClick={toggleModal} className="q-mark"><img src={qmark} alt="spørgsmålstegn"/></button>
            </div>
            </div>

            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Tilmeld dig kundeklubben</h3>
            <p>
            Tilmeld dig vores kludeklub og få særlige tilbud og rabatter. 
            Du kan også deltage i konkurrencer og vinde sjove præmier til hele familien!
            </p>
            <button className="btn-go">Tilmeld</button>
            <button className="close-modal" onClick={toggleModal}><img src={luk} alt="luk-ikon" className=""/>
            </button>
          </div>
        </div>
      )}

     </main>
    )
}