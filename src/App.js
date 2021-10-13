import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom' ;
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home'
import Category from './views/Category'
import Cart from './components/Cart/Cart'
import SingIn from './views/SingIn'
import Notification from './components/Notification/Notification';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext';
import { NotificationContextProvider } from './context/NotificationContext';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificationContextProvider> 
          <BrowserRouter>
            <NavBar />
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/category/:categoryId'>
                  <Category />
                </Route>
                <Route path='/cart'>
                  <Cart />
                </Route>   
                <Route path='/product/:itemId'>
                  <ItemDetailContainer />
                </Route> 
                <Route path='/singin'>
                  <SingIn />
                </Route>
              </Switch>
            <Notification />
          </BrowserRouter>
        </NotificationContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
