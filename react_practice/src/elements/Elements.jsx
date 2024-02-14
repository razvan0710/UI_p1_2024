export default function Elements() {

    
    return (
        <div className='lista-container'>
            <div className='lista-item'>
                <input type="checkbox" />
                Element 1
                <button>Delete</button>
            </div>
            <div className='lista-item'>
                <input type="checkbox" />
                Element 2
                <button>Delete</button>
            </div>
            <div className='lista-item'>
                <input type="checkbox" />
                Element 3
                <button>Delete</button>
            </div>
            <div className='add-item-container'>
                <input type="text" placeholder="Nume element nou" />
                <button>Adaugă Element</button>
            </div>
        </div>
    );
}