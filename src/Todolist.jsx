import { useState } from "react";

function Todolist (){
    const [taches, setTaches] = useState(['Apprendre reat',  'Faire un nouveau projet']);
    const [nouvelleTache, setNouvelleTache] = useState('');

    function ajoutertache(){
        if(nouvelleTache.trim() !== ''){
             setTaches([...taches, nouvelleTache]);
            setNouvelleTache('');
        }
       
    }

    function supprimerTache(index){
        const nouvellesTaches = [...taches];
        nouvellesTaches.splice(index, 1);
        setTaches(nouvellesTaches);
    }

    return (
       <div>
        <h1>TACHES</h1>
            <div>
                <input type="text" 
                    value={nouvelleTache}
                    onChange={(e) => setNouvelleTache(e.target.value)}
                />
                <button onClick={ajoutertache}>ajouter</button>
            </div>
            <ol>
                    {taches.map((tache, index) => (
                        <li key={index}>
                            {tache} <br />
                            <button onClick={() => supprimerTache(index)}>supprimer</button>
                        </li>
                        
                    ))}
            </ol>
       </div>
    )


}
export default Todolist;