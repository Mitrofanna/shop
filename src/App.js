function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img />
          <div className="header__info"> 
            <h3 className="header__title">Mitrofan Shop</h3>
            <p className="header__name">Лучший магазин</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img />
            <span>1205 p.</span>
          </li>
          <li>
            <img />
          </li>
        </ul>
      </header>
      <main className="content">
        <div class="content__wrapper">
          <h1 className="content__title">Все товары</h1>
          <div>
            <input type="text" placeholder="Поиск..." />
            <img></img>
          </div>
        </div>
        <section className="content__cards">
          <div className="card">
            <img className="card__img"></img>
            <h3 className="card__title">Желтые кроссы</h3>
            <div className="card__buy">
              <div>
                <p>Цена :</p>
                <b>1200 p.</b>
              </div>
              <button className="card__button">Купить</button>
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