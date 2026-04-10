function Liste(){
    const prenoms = ['damso','brad','gims','jul'];

    return (
        <ul>
            {prenoms.map((prenom, index) => (
                 <li key={index}>{prenom}</li>
            ))}
               
           
        </ul>
    );
}
export default Liste;