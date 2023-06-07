export default function BookingKort({post}) {
    return (
        <div className="kort">
            <div className="tekst">
                <h3>Søbredden</h3>
                <hr/>
                <p>Navn: {post.navn}</p>
                <p>Tlf.:{post.telefon}</p>
                <p>Antal voksne: {post.voksne}</p>
                <p>Antal børn: {post.boern}</p>
                <p>Dato: {post.dato}</p>
                <p>Tidspunkt:{post.tidspunkt}</p>
            </div>
        </div>
    ) 
 }