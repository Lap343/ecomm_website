import { useContext } from "react";
import { CartContext } from "../App";

const CheckoutPage = () => {

    const { cart , setCart } = useContext(CartContext);

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
                    </div>
                )
            })
        } else {
            console.log('not yet')
        }
    }

    return(
        <>
            <h1>Welcome to the checkout page!</h1>
            <div>{iterate(cart)}</div><hr/>
            <h2>Done</h2>
            <button onClick={() => {
                setCart([]);
                alert("Thank you for shopping! Your items will totally be on the way!!!")
            }}>Checkout!</button>
        </>
    )
}

export default CheckoutPage;