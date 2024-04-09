function Promo() {
    return (
        <section className="promo">
        <h2 className="promo__title">Выбери свой</h2>
        <h2 className="promo__title promo__title-orange">скейтборд</h2>
        <div className="promo__photos">
          <img className="promo__photo" src="./img/promo/slide1.png" width="120" height="240"></img>
          <img className="promo__photo" src="./img/promo/slide2.png" width="140" height="280"></img>
          <img className="promo__photo" src="./img/promo/slide3.png" width="160" height="320"></img>
          <img className="promo__photo" src="./img/promo/slide4.png" width="140" height="280"></img>
          <img className="promo__photo" src="./img/promo/slide5.png" width="120" height="240"></img>
        </div>
      </section>
    );
}

export default Promo;