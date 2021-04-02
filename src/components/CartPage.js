import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const CartPage = () => {

    const { cart, setCart } = useContext(CartContext);

    const iterate = (data) => {
        if (data) {
            return data.map((info, key) => {
                return(
                    <div key={key}>
                        <div>{info.title}</div>
                        <div>{info.price}</div>
                        <div>{info.description}</div>
                        <img src={info.image} alt='' />
                        <div>{info.category}</div>
                        <button onClick={() => {setCart(cart.filter(item => item.id !== info.id))}}>X</button>
                    </div>
                )
            })
        } else {
            console.log('not yet')
        }
    }

    return(
        <>
            <h1>Welcome to your cart!</h1>
            <div>{iterate(cart)}</div><hr/> 
            <div>Done shopping? Hit the checkout button!</div>
            <Link to='/CheckoutPage'><button>Go to Checkout!</button></Link>
        </>
    )
}

export default CartPage;