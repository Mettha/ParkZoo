import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";

export default function OpretBooking() {
    const navigate = useNavigate();


    async function createPost(newPost) {

        const url = "https://park-zoo-2f330-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
        const firstResponse = await fetch(url);
        let firstData = await firstResponse.json();

        if (firstData === null) { // If there are NO objects...(hvis data er lig med 0 (=== betyder lig med))
            firstData = [] // Create new array for objects
        }

        firstData.push(newPost); // Add new post to object list

        const response = await fetch(url, {
            method: "PUT", // Overwrites database
            body: JSON.stringify(firstData) // Rewrite database
        });

        const data = await response.json();
        console.log(data);
        navigate("/bookingbekraeftigelse");
    }


    return (
        <main>
        <div className="top-bar">
             <div>
            <NavLink to="/grillomraader"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Søbredden</h3>
            </div>
        </div>
        
        <div className="info-sec">
            <div className="info-tekst">
            <h2>Søbredden</h2>
            <p>Nyd den fredfyldte stemning <br/> ved søbredden.</p>
            <p>Book området ved at indtaste <br/> dine oplysninger.</p>
            </div>
        </div>
        <hr/>
        <br></br>
        <div className="aftale">
        <BookingForm savePost={createPost} />
        </div>
    
        </main>
        )
}