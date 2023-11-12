import Img_header from "../img/img-header.jpg";
import "./style.css";
import Indomie from "../img/indomie.png"
import GoldenLatoLato from "../img/latolato.png"
import GoldenCoca from "../img/gold-a.png"
import BlackHole from "../img/M87.jpg"
import N from '../img/blank.png';
import Cosmic from "../img/cosmic microwave.png"
import GoldenDiamond from '../img/golden diamond.png';
import Cart from '../img/cart.png'
import CartPage from '../component/cart'
import Modal from 'react-bootstrap/Modal'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
function Home(){
    const initialProduct = [
        {id: 1, name: 'Cosmic', price: 35000, quantity: 1, image: Cosmic},
        {id: 2, name: 'GOLD MIE', price: 25000, quantity: 100, image: Indomie},
        {id: 3, name: 'Cosmic', price: 40000, quantity: 1, image: Cosmic},
        {id: 4, name: 'Cosmic', price: 55000, quantity: 1, image: Cosmic},
    ]

    const [products, setProducts] = useState(initialProduct);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [cart, serCart] = useState([])

    function openCartModal(){
      setIsCartModalOpen(true);
    }

    function closeCartModal(){
      setIsCartModalOpen(false);
    }

    function increaseOrderCount(id) {
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          });
        });
      }
    
      function decreaseOrderCount(id) {
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id && product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          });
        });
      }
    return(
        <div className="content">
            <img src={Img_header} className="img-header"/>
            <h1>Mau makan apa hari ini?</h1>
            <button onClick={openCartModal}>
              <img src={Cart} alt="cart"/>
            </button>
            <CartPage isOpen={isCartModalOpen} closeModal={closeCartModal} cart={cart}/>
            <div className='card-container'>
                {products.map((product) => (
                    <div className='card' key={product.id}>
                    <img src={product.image} className='card-img-top' alt={product.name}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <h6>Rp.{product.price}</h6>
                        <div className='count-btn'>
                            <button type="button"
                            onClick={() => decreaseOrderCount(product.id)}
                            className='btn btn-light'>
                                -</button>
                            <span>{product.quantity}</span>
                            <button type="button"
                            onClick={() => increaseOrderCount(product.id)}
                            className='btn btn-light'>
                                +</button>
                        </div>
                        <a href="#" className='btn btn-primary'>Order</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Home;