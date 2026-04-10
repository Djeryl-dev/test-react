import { act, useState } from "react";

function Gestionactivites(){
    const [activites, setactivites]= useState([
        {id: 1, nom:"programmation" , terminee: false},
        {id: 2, nom:"robotique" , terminee: false},
        {id: 3, nom:"art" , terminee: false},
        {id: 4, nom:"design" , terminee: false}
    ]);

    const [nouvelleactivite, setnouvelleactivite] = useState('');

function ajouteractivite(){
    const nouvelid = activites.length +1;
    if(nouvelleactivite.trim() !== ''){
        setactivites([...activites, {
            id : nouvelid, nom: nouvelleactivite, terminee : false
        }]);
        setnouvelleactivite('');
    }

}
function supprimeractiviter(idsuprimer){
    const nouvellesactivites =  activites.filter(activite => activite.id !== idsuprimer);
    setactivites(nouvellesactivites);
}

function termineractiviter(idaterminee){
    const nouvellesactivites = activites.map(activite => {
        if( activite.id == idaterminee){
            return {...activite, terminee: !activite.terminee};
        }
        return activite;
    })
    setactivites(nouvellesactivites);

}

    return(

        <div>
            <h1> mes activites</h1>
            <div>
                <input type="text"
                placeholder="nouvelle activite" 
                value={nouvelleactivite}
                onChange={(e) => setnouvelleactivite(e.target.value)}/> <br />
                <button onClick={ajouteractivite}>ajouter</button>
            </div>
            <div>
                <ul>
                    {activites.map((activite) => (
                        <li key={activite.id} style={{ 
                            textDecoration: activite.terminee ? 'line-through' : 'none',
                            color: activite.terminee ? 'gray' : 'black'
                        }}>{activite.nom} <br />
                        <button onClick={() => termineractiviter(activite.id)}>{activite.terminee ? 'annuler' : 'terminee' }</button><br />
                        <button onClick={() => supprimeractiviter(activite.id)}>supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export default Gestionactivites;