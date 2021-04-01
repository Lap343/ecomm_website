import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductView from './components/ProductView';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PageNotFound from './components/PageNotFound';
import Navbar from './navbar/Navbar';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductView} />
          <Route path='/details/:id' component={ProductDetails} />
          <Route path='/CartPage' component={CartPage} />
          <Route path='/CheckoutPage' component={CheckoutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;