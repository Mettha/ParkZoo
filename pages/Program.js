import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";
import bell from "../images/SVG/outline-bell.svg";
import bjorn from "../images/soebjoern.png";
import pyton from "../images/pyton.png";
import dyr from "../images/dyrepasser.png";
import pingvin from "../images/pingvin.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Program() {

    const notify=()=>toast("Påmindelse er tilføjet",{
        theme: "dark",
        position: "top-right",
        type: "success"
      })

    return(
        <main>
        <div className="top-bar">
       <div>
       <NavLink to="/konto"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
       </div>
       <div>
       <h3>Dagsprogram</h3>
       </div>
   </div>

   <div className="info-tekst">
       <h2>Juni</h2>
    </div>

    <div className="kalender">
        <button>Man <br/> 12</button>
        <button>Tirs <br/> 13</button>
        <button>Ons <br/> 14</button>
        <button>Tors <br/> 15</button>
        <button>Fre <br/> 16</button>
        <button>Lør <br/> 17</button>
        <button>Søn <br/> 18</button>
    </div>

    <div className="info-tekst">
       <p className="green">Parken er åben. 10.00 - 17.00</p>
       <p>Indgangen lukker en time før parken.</p>
    </div>

    <div className="program-item">
            <div>
            <img src={bjorn} alt="søbjørn" className=""/>
            </div>
            <div className="p-item">
                <h4>11.00 <br/> Søbjørnen fodres</h4>
            </div>
            <div className="toast">
            <button onClick={notify} className="bell-button"><img src={bell} alt="notifikations-klokke" className="bell"/></button>
            </div>
            </div>

            <div className="program-item">
            <div>
            <img src={pyton} alt="pytonslange" className=""/>
            </div>
            <div className="p-item">
                <h4>11.30 <br/> Tæm en tigerpyton</h4>
            </div>
            <div className="toast">
            <button onClick={notify} className="bell-button"><img src={bell} alt="notifikations-klokke" className="bell"/></button>
            
            </div>
            </div>

            <div className="program-item">
            <div>
            <img src={dyr} alt="dyrepassser" className=""/>
            </div>
            <div className="p-item">
                <h4>13.00 <br/>Spørg dyrepasseren</h4>
            </div>
            <div className="toast">
            <button onClick={notify} className="bell-button"><img src={bell} alt="notifikations-klokke" className="bell"/></button>
           
            </div>
            </div>

            <div className="program-item">
            <div>
            <img src={pingvin} alt="pingvin" className=""/>
            </div>
            <div className="p-item">
                <h4>15.30 <br/> Pingvinerne fodres</h4>
            </div>
            <div className="toast">
            <button onClick={notify} className="bell-button"><img src={bell} alt="notifikations-klokke" className="bell"/></button>
            <ToastContainer></ToastContainer>
            </div>
            </div>
   </main>
    )
}