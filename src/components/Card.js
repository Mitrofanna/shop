function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={props.imageUrl} width="133" height="112" alt="Изображение товара"></img>
            <h4 className="card__title">{props.title}</h4>
            <div className="card__buy">
              <div className="card__price-wrapper">
                <p className="card__price">Цена :</p>
                <b>{props.price}</b>
              </div>
              <button className="card__button card__button-default" onClick={props.onClickAddCart}>
                <span className="visually-hidden">Добавить в корзину.</span>
              </button>
            </div>
          </div>
    );
}

export default Card;