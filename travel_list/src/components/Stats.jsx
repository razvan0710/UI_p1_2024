export default function Stats({items}) {
    const totalItems = items.length;
    const packedItems = (items.filter((item) => item.packed)).length;

    return(
        <footer className="stats">
            {Math.round(packedItems/totalItems*100)===100 
            ? <em>You are ready to go!</em> 
            : <em>You have {totalItems} items on your list and you already packed {packedItems} ({Math.round(packedItems/totalItems*100)}%)</em>}
           
        </footer>
    )
}