import { useEffect, useState } from "react";
import Bookingskort from "../components/BookingAdminKort";
import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";

export default function Bookinger() {
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false


    useEffect(() => {
        async function getPosts() {
        const url = "https://park-zoo-2f330-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
        const response = await fetch(url);
        // data indeholder alt indhold fra bookinger database
        const data = await response.json();

        if (data !== null) {
            const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            }));
                //variabel "posts" bliver lig med listen af bookede aftaler
                setPosts(postsArray);
            } else {
                // sætter variablen "isPosts" til false, for der er ingen bookings
                setIsPosts(false);
        }
        }
        getPosts();
        }, []);



    return (
        <main>
            <div className="top-bar">
             <div>
            <NavLink to="/grillomraader"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
            </div>
            <div>
            <h3>Dine bookinger</h3>
            </div>
        </div>

        <div className="info-tekst">
            <h2>Dine bookinger</h2>
            <p>Her kan du se dine bookinger <br/> af grillområder.</p>
         </div>

        <br/>
    
        {isPosts ? (
            <div className="bookingkort">
                {posts.map((post) => (
                <Bookingskort key={post.id} post={post} />
                 ))}
            </div>
            ):(
            <p>Der er ingen bookinger</p>
            )}

        </main>
     );
    }