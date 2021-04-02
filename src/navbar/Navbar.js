import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../App";

const Navbar = () => {

    const { cart } = useContext(CartContext);

    return(
        <div className='nav'>
            Welcome!<br/>
            <Link to='/'>Go to Home</Link><br/>
            <Link to='/CartPage'>Go to Cart</Link><br/>
            <Link to='/CheckoutPage'>Go to Checkout</Link><hr/>
            <div>Number of items in the cart:{cart.length}</div>
        </div>
    )
}

export default Navbar;