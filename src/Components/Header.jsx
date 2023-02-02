import CartIcon from "./CartIcon";
export default function Header(props){
    return(
    <div className="header">
        <div className="title">Cart</div>
        <CartIcon cartItems={props.cartItems} />
    </div>
    );
}