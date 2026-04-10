import { useState } from "react";

function Formulaire(){
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event){
        event.preventDefault();//empeche la page de se recharger
        alert(`Nom:${nom}, Email:${email}`);

    }
    return (
        <form onClick={handleSubmit}>
            <div>
                <label >Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
            </div>

            <div>
                <label >Email :</label>
                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Formulaire;