import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList({items, handleDeletItem, handleToggleItem, deleteAll}) {
    
    const [sortBy, setSortBy] = useState('packed');
    let sortedItems
    if(sortBy === 'input') sortedItems = items
       .sort((a, b) => a.id - b.id)
    if(sortBy === 'description') sortedItems = items
       .sort((a, b) => a.description.localeCompare(b.description))

    if(sortBy === 'packed') sortedItems = items
       .sort((a, b) => a.packed - b.packed)

       
    return(
        <div className="list">
            <ul>
            {items.map((item) => (
                <Item item={item} key={item.id} handleDeletItem={handleDeletItem} handleToggleItem={handleToggleItem}/>
            ))
            }
            </ul>
            <div className='actions'>
            <button onClick={()=> deleteAll()}>Delete All Selected Items</button>
                <select name="" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
            </div>
        </div>
    )
}

function Item({item, handleDeletItem, handleToggleItem}){
    const [packed, setPacked] = useState(item.packed);
    return (
        <>
        <li key={item.id} className="item">
            <input type="checkbox" value={item.packed} onChange={()=>handleToggleItem(item.id)}/>
            <span style={item.packed ? {textDecoration:"line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            {/* <button onClick={()=>setPacked(!packed)}>✖️</button> */}
            <button onClick={()=>handleDeletItem(item.id)}>❌</button>
        </li>
        </>
    )
}