import { useState } from "react";

function Compteur(){
    const [compte, setcompte] = useState(0);

    return (
        <div>
            <p>compteur : {compte}</p>
            <button onClick={() => setcompte(compte + 1)} disabled={compte ===10}>  +1</button>
            <button onClick={() => setcompte(compte - 1)} disabled={compte ===0}>-1</button>
            <button  onClick={() => setcompte(0)}>reset</button>
        </div>
        
    );
}
export default Compteur;