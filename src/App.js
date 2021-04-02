import { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'

import ProductView from './components/ProductView';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PageNotFound from './components/PageNotFound';
import Navbar from './navbar/Navbar';

export const ProductContext = createContext(null);
ProductContext.displayName = 'CartContext';
export const CartContext = createContext([]);

const App = () => {

  let [ cart, setCart ] = useState([])

  let [ productData, setProductData ] = useState('');

  const fetchData = async () => {
        const base = 'https://fakestoreapi.com/products/'
        const url = `${base}`

        await fetch(url)
              .then(res=>res.json())
              .then((response) => {
                    setProductData(response)
              })
        .catch((error)=> {
              console.log(error)
        })
  }

  useEffect(() => {
        fetchData()
  }, [])

  return (
    <div className='main-app'>
      <BrowserRouter>
        <ProductContext.Provider value={productData}>
          <CartContext.Provider value={{ cart, setCart }}>
            <Navbar />
            <Switch>
              <Route path='/' exact component={ProductView} />
              <Route path='/details/:id' component={ProductDetails} />
              <Route path='/CartPage' component={CartPage} />
              <Route path='/CheckoutPage' component={CheckoutPage} />
              <Route component={PageNotFound} />
            </Switch>
          </CartContext.Provider>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;