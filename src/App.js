import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from './Components/Admin';
import Shipment from './Components/Shipment';
import Auth from './Components/Auth/Auth';
import PrivetRoute from './Components/Auth/PrivetRoute';
import CheckOut from './Components/CheckOut'
import Orders from './Components/Orders'
import NotFoundImg from './screenshots/404.png'
import { createContext, useState } from 'react';

export const userContext = createContext()
export const orderPdContext = createContext()
export const orderListContext = createContext()

function App() {
  const [user, setUser] = useState()
  const [orderPd, setOrderPd] = useState()
  const [orderList, setOrderList] = useState()


  return (
    <userContext.Provider value={[user, setUser]}>
      <orderPdContext.Provider value={[orderPd, setOrderPd]}>
        <orderListContext.Provider value={[orderList, setOrderList]}>
          <Router className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <PrivetRoute path="/admin">
                <Admin />
              </PrivetRoute>
              <Route path="/checkOut/:id">
                <CheckOut />
              </Route>
              <PrivetRoute path="/shipment">
                <Shipment />
              </PrivetRoute>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="*">
                <div className="text-center bg-dark">
                  <img src={NotFoundImg} alt="" />
                </div>
              </Route>
            </Switch>
          </Router>
        </orderListContext.Provider>
      </orderPdContext.Provider>
    </userContext.Provider>
  );
}

export default App;
