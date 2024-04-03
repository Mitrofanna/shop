import { useState } from "react";
import ContentLoader from "react-content-loader";

function Card({
  imageUrl,
  title, 
  id, 
  price, 
  favorited = false, 
  added = false,
  loading = false, 
  onClickAddCart, 
  onClickFavorite
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickAddButton = () => {
    onClickAddCart({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavoriteButton =() => {
    onClickFavorite({id, title, imageUrl, price});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
      {loading ? (
        <ContentLoader 
        speed={2}
        width={210}
        height={266}
        viewBox="0 0 210 266"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="166" height="140" /> 
        <rect x="0" y="146" rx="5" ry="5" width="166" height="14" /> 
        <rect x="6" y="197" rx="0" ry="0" width="75" height="0" /> 
        <rect x="0" y="168" rx="5" ry="5" width="166" height="14" /> 
        <rect x="0" y="195" rx="5" ry="5" width="58" height="12" /> 
        <rect x="0" y="212" rx="5" ry="5" width="58" height="12" /> 
        <rect x="115" y="195" rx="5" ry="5" width="46" height="28" />
      </ContentLoader>
      ) : (
        <>
        <img className="card__img" src={imageUrl} width="100" height="140" alt="Изображение товара"></img>
        <h4 className="card__title">{title}</h4>
        <div className="card__buy">
          <div className="card__price-wrapper">
            <p className="card__price">Цена :</p>
            <b>{price} ₽</b>
          </div>
          <div className="card__button-favorite" onClick={onClickFavoriteButton}>
            <svg className={isFavorite && 'card__favorite-add'} aria-hidden="true" focusable="false" fill="#c3c3c3" width="17" height="18" viewbox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
            </svg>
            <span className="visually-hidden">Добавить в избранное.</span>
          </div>
          <button className={`card__button ${!isAdded ? 'card__button-default' : 'card__button-active'}`} onClick={onClickAddButton}>
            <span className="visually-hidden">Добавить в корзину.</span>
          </button>
        </div>
        </>
      )}
    </div>
  );
}

export default Card;