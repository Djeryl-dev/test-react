function CarteProduit({nom, prix, image}){
    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '200px' }}>
            <img src="{image}" alt="{nom}" style={{ width: '100%' }}/>
            <h3>son nom est :{nom} </h3>
            <p>le prix est :{prix} FCFA</p>
        </div>
    );
}
export default CarteProduit;