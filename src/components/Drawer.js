import Empty from "./Empty";

function Drawer({onCloseCart, onRemove, items = []}) {
    return (
        <aside className="drawer">
        <div className="drawer__block">  
          <div className="drawer__title-wrapper">
            <h2 className="drawer__title">Корзина</h2>
            <button className="drawer__button drawer__button-delete" onClick={onCloseCart}>
              <span className="visually-hidden">Закрыть корзину.</span>
            </button>
          </div>
          {items.length > 0 ? (
            <div className="drawer__full">
              <div className="drawer__list">
              {items.map((item) => (
                <div key={item.id} className="drawer__item">
                  <img className="drawer__img" src={item.imageUrl} width="70" height={70} alt="Изображение товара." />
                  <div>
                    <p className="drawer__title">{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <button className="drawer__button drawer__button-delete" onClick={() => onRemove(item.id)}>
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
              <button className="button drawer__total-button">
                Оформить заказ
                <img className="drawer__arrow" src="./img/svg/arrow.svg" width={14} height={12} alt="Сюда." />
              </button>
            </div>
            ) : (
              <Empty />
            )} 
        </div>
      </aside>
    );
}

export default Drawer;