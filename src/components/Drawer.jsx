import { useContext, useState } from "react";
import { API_CART } from "../api";
import axios from "axios";
import Empty from "./Empty";
import Info from "./Info";
import AppContext from "../app-context";

function Drawer() {
  const {onCloseCart, cartItems, onRemoveItem, setCartItems} = useContext(AppContext);

  const [isOrdered, setIsOrdered] = useState(false);

  const onClickOrder = async() => {
    await axios.put(API_CART, []);
    setIsOrdered(true);
    setCartItems([]);
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
                  <b>1200 p.</b>
                </li>
                <li className="drawer__total-item">
                  <span>С доставкой</span>
                  <div className="drawer__dashed"></div>
                  <b>1300 p.</b>
                </li>
              </ul>
              <button className="drawer__total-button" onClick={onClickOrder}>
              </button>
            </div>
            ) : (
              isOrdered ? <Info /> : <Empty /> 
            )} 
        </div>
      </aside>
    );
}

export default Drawer;