import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from 'React-router-dom';
import Navbar from "./component/navbar";
import Home from "./pages/Home";
function App(){

    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
  
    const addToCart = (item) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
          return [...prevItems];
        } else {
          return [...prevItems, { ...item, quantity: 1 }];
        }
      });
    };
  
    const openCart = () => {
      setCartVisible(true);
    };
  
    const closeCart = () => {
      setCartVisible(false);
    };
  

    return(
        <BrowserRouter>
        <div className="App">
            <Navbar openCart={openCart} /> 
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home addToCart={addToCart}/>}/>
                    
                </Routes>

            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;
