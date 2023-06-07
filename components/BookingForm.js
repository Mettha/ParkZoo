import { useEffect, useState } from "react";

export default function BookingForm({ savePost, post }){
    const [navn, setNavn] = useState("");
    const [telefon, setTelefon] = useState(0);
    const [voksne, setVoksne] = useState(0);
    const [boern, setBoern] = useState(0);
    const [dato, setDate] = useState(0);
    const [tidspunkt, setTid] = useState(0);
    
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (post) {
            setNavn(post.navn)
            setTelefon(post.telefon);
            setVoksne(post.voksne);
            setBoern(post.boern);
            setDate(post.dato);
            setTid(post.tidspunkt);
            }
            }, [post]); 

            async function handleSubmit(e) {
                e.preventDefault();
                // Der oprettes et objekt "formData" med de oplysninger som blev indtastet i formularen.
                const formData = {
                    navn: navn,
                    telefon: parseFloat(telefon),
                    voksne: parseFloat(voksne),
                    boern: parseFloat(boern),
                    dato: parseFloat(dato),
                    tidspunkt: parseFloat(tidspunkt),
                    }

                const validForm = formData.navn && formData.telefon && 
                formData.voksne && formData.boern && formData.dato && formData.tidspunkt; 
                    if (validForm) {
                        savePost(formData);
                    } else {
                        setErrorMessage("Udfyld venligst alle felter.");
                    }
                    }

return (
<form className="formularlayout" onSubmit={handleSubmit} >

<label>
    Navn<input className="inputfelt" type="text" name="navn" value={navn} placeholder="Indtast
    navn" onChange={e => setNavn(e.target.value)} />
</label>

<label>
    Tlf.:<input className="inputfelt" type="text" name="telefon" value={telefon} placeholder="Indtast
    telefonnummer" onChange={e => setTelefon(e.target.value)} />
</label>

<label>
    Antal voksne<input className="inputfelt" type="text" name="voksne" value={voksne} placeholder="Indtast
    antal voksne" onChange={e => setVoksne(e.target.value)} />
</label>

<label>
    Antal børn<input className="inputfelt" id="beskedfelt" type="text" name="besked" value={boern} placeholder="Indtast antal børn" 
    onChange={e => setBoern(e.target.value)} />
</label>

<label>
    Dato<input className="inputfelt" id="beskedfelt" type="text" name="besked" value={dato} placeholder="Indtast dato" 
    onChange={e => setDate(e.target.value)} />
</label>

<label>
    Tidspunkt<input className="inputfelt" id="beskedfelt" type="text" name="besked" value={tidspunkt} placeholder="Indtast tidspunkt" 
    onChange={e => setTid(e.target.value)} />
</label>

<p className="tekst-fejl">{errorMessage}</p><button type="submit">Indsend</button>
</form>
);
}  