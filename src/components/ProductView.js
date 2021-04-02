import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, ProductContext } from '../App';

const ProductView = () => {

      const products = useContext(ProductContext);
      const { cart, setCart } = useContext(CartContext);

      const iterate = (data) => {
            if (data) {
                  return data.map((info, key) => {
                        return(
                              <div className='product' key={key} >
                                    <div>
                                          <strong>{info.title}</strong>
                                    </div>
                                    <div>
                                          <strong>Price: </strong>
                                          ${info.price}
                                    </div> 
                                    <div>
                                          <strong>Description: </strong>
                                          <br/>{`${info.description.substring(0, 30)}...`}
                                    </div>
                                    <div>
                                          <strong>Category: </strong>
                                          <br/>{info.category}
                                    </div>
                                    <img className='product-img' src={info.image} alt={''} /><br/>
                                    <Link  to={`/details/${key}`}>
                                          <button>Look at product's details</button>
                                    </Link><br/><hr/>
                                    <button onClick={() => {setCart([...cart, info])}}>Add to cart</button>
                              </div>
                        )
                  })
            } else {
            console.log('not yet')
            }
      }

      return(
            <>
                  <div></div>
                  <div>{iterate(products)}</div>
                  <div>{console.log(cart)}</div>
            </>
      )
}

export default ProductView;