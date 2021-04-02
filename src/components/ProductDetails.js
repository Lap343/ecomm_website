import { useContext } from 'react';
import { CartContext, ProductContext } from '../App';

const ProductDetails = ({ match }) => {

    const products = useContext(ProductContext);
    const { cart, setCart } = useContext(CartContext);

    const iterate = (data) => {
        if (data) {
            return(
                <div>
                    <div>
                        <div>{data.title}</div>
                        <div>{data.price}</div>
                        <div>{data.description}</div>
                        <img src={data.image} alt='' />
                        <div>{data.category}</div>
                    </div>
                    <button onClick={() => {setCart([...cart, data])}}>Add to cart</button>
                </div>
            )
        } else {
            console.log('not yet')
        }
    }

    return(
        <>
            <h1>Product#{parseInt(match.params.id)+1} detail page!</h1>
            <div>{iterate(products[match.params.id])}</div>
            <div>{console.log(cart)}</div>
        </>
    )
}

export default ProductDetails