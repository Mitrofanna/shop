function EmptyCart() {
    return (
        <div className="empty">
            <h3 className="empty__title">К сожалению,<br></br> ваша корзина пуста.</h3>
            <img className="empty__img" src="./img/content/skate.png" width="160" height="160" alt="Изображение скейтбордиста."></img>
        </div>
    );
}

export default EmptyCart;