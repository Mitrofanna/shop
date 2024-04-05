import { useContext, useState } from "react";
import AppContext from "../app-context";

function Card({
  imageUrl,
  title, 
  id, 
  price, 
  favorited = false, 
  onClickAddCart, 
  onClickFavorite
}) {
  const {isItemChecked} = useContext(AppContext);
  const isChecked = isItemChecked(title);
  console.log(title, isChecked);

  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickAddButton = () => {
    onClickAddCart({id, title, imageUrl, price});
  };

  const onClickFavoriteButton =() => {
    onClickFavorite({id, title, imageUrl, price});
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">      
        <img className="card__img" src={imageUrl} width="100" height="140" alt="Изображение товара"></img>
        <h4 className="card__title">{title}</h4>
        <div className="card__buy">
          <div className="card__price-wrapper">
            <p className="card__price">Цена :</p>
            <b>{price} ₽</b>
          </div>
          <div className="card__button-favorite" onClick={onClickFavoriteButton}>
            <svg className={isFavorite && 'card__favorite-add'} aria-hidden="true" focusable="false" fill="#c3c3c3" width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
            </svg>
            <span className="visually-hidden">Добавить в избранное.</span>
          </div>
          <button className={`card__button ${isChecked ? 'card__button-active' : 'card__button-default'}`} onClick={onClickAddButton}>
            <span className="visually-hidden">Добавить в корзину.</span>
          </button>
        </div>
    </div>
  );
}

export default Card;