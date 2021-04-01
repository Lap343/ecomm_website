import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            Welcome!<br/>
            <Link to='/'>Go to Home</Link><br/>
            <Link to='/CartPage'>Go to Cart</Link><br/>
            <Link to='/CheckoutPage'>Go to Checkout</Link><br/>
        </>
    )
}

export default Navbar;