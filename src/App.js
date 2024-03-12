import Header from "./components/header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <aside className="drawer">
        <div className="drawer__block">
          <h2 className="drawer__title">Корзина</h2>
          <div className="drawer__list">
            <div className="drawer__item">
              <img className="drawer__img" src="./img/content/1.jpg" width="70" height={70} alt="Изображение товара." />
              <div>
                <p className="drawer__title">Желтые кроссы.</p>
                <b>1200 p.</b>
                </div>
                <button className="drawer__button drawer__button-delete">
                  <span className="visually-hidden">Удалить из корзины.</span>
                </button>
              </div>
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
      </aside>
      <main className="content">
        <div class="content__wrapper">
          <h1 className="content__title">Все товары</h1>
          <div className="search">
            <input className="search__input" type="text" placeholder="Поиск..." />
            <img className="search__img" src="./img/svg/search.svg"></img>
          </div>
        </div>
        <section className="content__cards">
          <div className="card">
            <img className="card__img" src="./img/content/1.jpg" width="133" height="112" alt="Изображение товара"></img>
            <h4 className="card__title">Желтые кроссы</h4>
            <div className="card__buy">
              <div className="card__price-wrapper">
                <p className="card__price">Цена :</p>
                <b>1200 p.</b>
              </div>
              <button className="card__button card__button-default">
                <span className="visually-hidden">Добавить в корзину.</span>
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card__img" src="./img/content/1.jpg" width="133" height="112" alt="Изображение товара"></img>
            <h3 className="card__title">Желтые кроссы</h3>
            <div className="card__buy">
              <div>
                <p>Цена :</p>
                <b>1200 p.</b>
              </div>
              <button>Купить</button>
            </div>
          </div>
          <div className="card">
            <img className="card__img"></img>
            <h3 className="card__title">Желтые кроссы</h3>
            <div className="card__buy">
              <div>
                <p>Цена :</p>
                <b>1200 p.</b>
              </div>
              <button>Купить</button>
            </div>
          </div>
          <div className="card">
            <img className="card__img"></img>
            <h3 className="card__title">Желтые кроссы</h3>
            <div className="card__buy">
              <div>
                <p>Цена :</p>
                <b>1200 p.</b>
              </div>
              <button>Купить</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;