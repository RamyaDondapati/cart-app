export default function CartIcon(props){
    return (
        <div className="cart-icon">
            <div className="icon">
                <i className="fa-solid fa-cart-shopping" ></i>
            </div>
           
            <div className="counter">{props.cartItems}</div>
        </div>
    );
}