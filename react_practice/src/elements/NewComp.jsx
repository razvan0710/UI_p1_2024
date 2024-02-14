
let closeHours = 22
let isOpen = true

export default function NewComp() {
    return(
        <footer className="footer">
            {
                isOpen ? (
                    <Order closeHours={closeHours}/>
                ): (
                    <p>Order is closed!</p>)
            }
        </footer>
    )
}

function Order(props){
    return(
        <div className="order">
            <p>
                We are open until {props.closeHours} today!
            </p>
        </div>
    )
}