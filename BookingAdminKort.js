import { useNavigate } from "react-router-dom";

export default function BookingAdminKort({post}){
    const navigate = useNavigate();

    function opdaterKlik(){
        navigate(`posts/${post.id}`);
    }

    return (
        <div className="kort bookingskort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>Booking <br/> "Søbredden"</h3>
                <hr/>
                <p>Navn: {post.navn}</p>
                <p>Tlf.:{post.telefon}</p>
                <p>Antal voksne: {post.voksne}</p>
                <p>Antal børn: {post.boern}</p>
                <p>Dato: {post.dato}</p>
                <p>Tidspunkt:{post.tidspunkt}</p>
            </div>

            <div>
            <br/>
            <button className="btn-go" type="button" onClick={opdaterKlik}>Rediger</button>
            <br/>
            </div>
        </div>
    );
}