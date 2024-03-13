function Card() {
    return (
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
    );
}

export default Card;