import { act, useState } from "react";

function Gestionactivites (){

    const [activites, setactivites] = useState([
        {id: 1, nom: "programmation", terminee: false},
        {id: 2, nom: "robotique", terminee: false},
        {id: 3, nom: "art", terminee: false},
        {id: 4, nom: "design", terminee: false}
    ]);
    const [nouvelleactivite, setnouvelleactivite] = useState('');

    function ajouteractivite(){
        const nouvelleid = activites.length +1;
        setactivites([...activites, 
            {id: nouvelleid, nom: nouvelleactivite, terminee:false}
        ]);
        setnouvelleactivite('');
    }

    function supprimeractivite(idasupprimer){
        const nouvellesactivites = activites.filter(activite => activite.id !== idasupprimer);
        setactivites(nouvellesactivites);
    }
     
    function termineractivite(idaterminer){
        const nouvellesactivites = activites.map(activite => {
            if( activite.id === idaterminer){
                //modifier le statut
                return {...activite, terminee: !activite.terminee};
            }
            return activite;
        });
        setactivites(nouvellesactivites);
    }

    return(
        <div>
            <h1>mes activites</h1>

            <div>
                <input type="text"
                placeholder="nouvelle activite"
                value={nouvelleactivite} 
                onChange={(e) => setnouvelleactivite(e.target.value)}/> <br />
                <button onClick={ajouteractivite}>ajouter</button>
            </div>

            <ul>
                {activites.map((activite) =>(
                    <li key={activite.id} style={{
                        textDecoration: activite.terminee ? 'line-through' : 'none',
                            color: activite.terminee ? 'gray' : 'black'
                    }} >{activite.nom} <br />
                     <button onClick={() => termineractivite(activite.id)}>{ activite.terminee ? 'annuler':'terminer'}</button>
                     <button onClick={() => supprimeractivite(activite.id)}>supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Gestionactivites;