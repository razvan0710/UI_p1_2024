import { useState } from 'react';

export default function Form({handleItems}) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");

        if(!description) return;

        const newItem = {description, quantity, packed: false, id: Date.now()};
        console.log(newItem);

        handleItems(newItem)
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
             value={quantity}
             onChange={(e) => {setQuantity(e.target.value) 
                               console.log(e.target.value)}}>
                {Array.from({length: 20}, (_, i) => i+1).
                map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
                ))}
            </select>
            
            <input 
                type="text" 
                placeholder="Item..." 
                value={description} 
                onChange={(e)=> {
                    setDescription(e.target.value)
                    console.log(e.target.value)
                }}
            />
            <button>ADD</button>
        </form>
    )
}

