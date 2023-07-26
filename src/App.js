import { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header'
import Cart from './Components/Cart'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { db, auth } from './Components/firebase'
import Login from './Components/Login'
import AddProducts from './Components/AddProducts';
import Ac from './Components/Ac'
import Test from './Components/Test'
import { provider } from './Components/firebase'
import Elements from './components2/Elements'

import Login2 from './components2/Login2'
import Header2 from './components2/Header2'
import Home2 from './components2/Home2'
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); // It will get the data from local storage of browser Null means no user
  const [cartItems, setCartItems] = useState([])
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }
      localStorage.setItem('user', JSON.stringify(newUser))// only except strings brower storage
      setUser(newUser);
    }).catch((error) => { // if sign is not possible
      alert(error.message);
    })
  }


  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user') // Delete the data form local storage
      setUser(null)
    })
  }
  useEffect(() => {
    getCartItems();
  }, [])

  // console.log(cartItems)
  return (
    < Router >
      {
        !user ? (
          <div className="App">
            <Header2 signOut={signOut} user={user} cartItems={cartItems} />
            <Switch>
              <Route path='/login'>
                <Login2 setUser={setUser} />
              </Route>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/ac">
                <Ac />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/">
                {/* <Login2 setUser={setUser} /> */}
                <Home signIn={signIn} />
                <AddProducts />
                <Elements />
              </Route>
            </Switch>
          </div>
        ) : (
          <div className="App">
            <Header signOut={signOut} user={user} cartItems={cartItems} />
            <Switch>
              <Route path='/login'>
                <Login setUser={setUser} />
              </Route>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/ac">
                <Ac />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/">
                <Home2 />
                <AddProducts />
                <Elements />
              </Route>
            </Switch>
          </div>
        )
      }

    </Router >
  );
}

export default App;
