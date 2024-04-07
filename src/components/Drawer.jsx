import { useContext, useState } from "react";
import { API_CART, API_ORDERS } from "../api";
import axios from "axios";
import Empty from "./Empty";
import Info from "./Info";
import AppContext from "../app-context";

function Drawer() {
  const {onCloseCart, cartItems, onRemoveItem, setCartItems} = useContext(AppContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(API_ORDERS, {items: cartItems});//сохр. массив корзины для страницы заказов
      setOrderId(data.id);
      setIsOrdered(true);
      setCartItems([]);

      for(let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(API_CART + '/' + item.id);
        await delay(1000);
      }
    } catch(error) {
      alert('что-то пошло не так', error)
    }
  };

    return (
        <aside className="drawer">
        <div className="drawer__block">  
          <div className="drawer__title-wrapper">
            <h2 className="drawer__title">Корзина</h2>
            <button className="drawer__button drawer__button-delete" onClick={onCloseCart}>
              <span className="visually-hidden">Закрыть корзину.</span>
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className="drawer__full">
              <div className="drawer__list">
              {cartItems.map((item) => (
                <div key={item.id} className="drawer__item">
                  <img className="drawer__img" src={item.imageUrl} width="70" height={70} alt="Изображение товара." />
                  <div>
                    <p className="drawer__title">{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <button className="drawer__button drawer__button-delete" onClick={() => onRemoveItem(item.id)}>
                    <span className="visually-hidden">Удалить из корзины.</span>
                  </button>
                </div>
              ))}
              </div>
              <ul className="drawer__total">
                <li className="drawer__total-item">
                  <span>Итого:</span>
                  <div className="drawer__dashed"></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="drawer__total-item">
                  <span>С доставкой</span>
                  <div className="drawer__dashed"></div>
                  <b>{totalPrice + 1000} руб.</b>
                </li>
              </ul>
              <button className="drawer__total-button" onClick={onClickOrder} >
              </button>
            </div>
            ) : (
              isOrdered ? <Info orderId={orderId} /> : <Empty /> 
            )} 
        </div>
      </aside>
    );
}

export default Drawer;