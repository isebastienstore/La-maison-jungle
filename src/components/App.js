import Banner from './Banner'
import {useState, useEffect} from "react";
import Cart from "./Cart"
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Footer from "./Footer";
import '../style/Layout.css'

function App() {

    //On recupere le panier au premier chargement de la page
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    /*
    Permet de sauvegarder le panier à chaque modification.
    On recupere le panier au premier chargement de la page avec localStorage.getItem
     */
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
  return <div>
            <Banner>
                <img src={logo} alt="La maison jungle" className='lmj-logo'/>
                <h1 className='lmj-titre'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <Footer/>
        </div>
}

export default App;
