import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { NavLink } from "react-router-dom";
import backarrow from "../images/SVG/backarrow.svg";

export default function OpdaterBooking() {

    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams();

    const url = `https://park-zoo-2f330-default-rtdb.europe-west1.firebasedatabase.app/bookinger/${params.postId}.json`;

    useEffect(() => {
        async function getPost() {
          const response = await fetch(url);
          const data = await response.json();
          // post variablen indeholder oplysninger om den valgte bookingsaftale
            setPost(data);
          }
          getPost();
        }, [url]);

        async function savePost(postToUpdate) {
            const response = await fetch(url, {
              method: "PUT",
              body: JSON.stringify(postToUpdate)
            });
            const data = await response.json();
            console.log(data);
            // Efter gemt aftale sendes brugeren til /bookinger -> AdminBooking
            navigate("/bookinger");
          }


          async function deletePost() {
            const bekraeftSletning = window.confirm(`Vil du slette denne booking?`) 
           
    if (bekraeftSletning) {
            const url = "https://park-zoo-2f330-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
            const firstResponse = await fetch(url);
            const firstData = await firstResponse.json();
            
            firstData.splice(params.postId, 1); // Delete element from array
                   
            const response = await fetch(url, {
                method: "PUT", // Overwrites database
                body: JSON.stringify(firstData) // Rewrite database
            });
            
            const data = await response.json();
            console.log(data);
            // efter sletning går browseren til /bookinger -> 
            navigate("/bookinger");
            }
            }

            return (

                <main>
                <div className="top-bar">
                 <div>
                <NavLink to="/bookinger"><img src={backarrow} alt="backarrow" className="backarrow"/></NavLink>
                </div>
                <div>
                <h3>Ret booking</h3>
                </div>
            </div>
    
            <div className="info-tekst">
                <h2>Ret din booking</h2>
                <p>Her kan du rette eller slette <br/> bookinger af grillområde.</p>
             </div>
    
            <hr/>
            <br/>

                <section className="aftale">
                  <BookingForm post={post} savePost={savePost}/>
                  <button className="btn-no" onClick={deletePost}>Slet</button>
                </section>

                </main>
            );
            }