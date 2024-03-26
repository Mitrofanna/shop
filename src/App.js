import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const allCards = [
  {
    "id": "1",
    "title": "Лонгборд Kraken 40x10",
    "price": 4500,
    "imageUrl": "./img/content/1.jpg"
  },
  {
    "id": "2",
    "title": "Лонгборд Bamboo Stout 38x10",
    "price": 15350,
    "imageUrl": "./img/content/2.jpg"
  },
  {
    "id": "3",
    "title": "Лонгборд Everest 40x10",
    "price": 6700,
    "imageUrl": "./img/content/3.jpg"
  },
  {
    "id": "4",
    "title": "Лонгборд Canyon 39x10",
    "price": 5600,
    "imageUrl": "./img/content/4.jpg"
  },
  {
    "id": "5",
    "title": "Лонгборд Aquatica 38x9",
    "price": 5500,
    "imageUrl": "./img/content/5.jpg"
  },
  {
    "id": "6",
    "title": "Лонгборд City Cruiser 40x10",
    "price": 4990,
    "imageUrl": "./img/content/6.jpg"
  },
  {
    "id": "7",
    "title": "Лонгборд Uluwatu 36x9",
    "price": 11990,
    "imageUrl": "./img/content/7.jpg"
  },
  {
    "id": "8",
    "title": "Круизер Eastcoast 27x8",
    "price": 8200,
    "imageUrl": "./img/content/8.jpg"
  },
  {
    "id": "9",
    "title": "Круизер Surf Paradise 27x8",
    "price": 4700,
    "imageUrl": "./img/content/9.jpg"
  },
  {
    "id": "10",
    "title": "Круизер Summer 27x8",
    "price": 5800,
    "imageUrl": "./img/content/10.jpg"
  },
  {
    "id": "11",
    "title": "Круизер Glassy 27x8",
    "price": 8900,
    "imageUrl": "./img/content/11.jpg"
  },
  {
    "id": "12",
    "title": "Круизер Eastcoast Cyberpalm 27x8",
    "price": 4700,
    "imageUrl": "./img/content/12.jpg"
  },
  {
    "id": "13",
    "title": "Скейтборд Holographic 31x8",
    "price": 7500,
    "imageUrl": "./img/content/13.jpg"
  },
  {
    "id": "14",
    "title": "Скейтборд Beesmood 31x8",
    "price": 4690,
    "imageUrl": "./img/content/14.jpg"
  },
  {
    "id": "15",
    "title": "Скейтборд Droshky 31x8",
    "price": 9600,
    "imageUrl": "./img/content/15.jpg"
  },
  {
    "id": "16",
    "title": "Скейтборд для трюков Playshow 31x8",
    "price": 14690,
    "imageUrl": "./img/content/16.jpg"
  },
]

function App() {

  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <main className="content">
        <div className="content__wrapper">
          <h1 className="content__title">Все товары</h1>
          <div className="search">
            <input className="search__input" type="text" placeholder="Поиск..." />
            <img className="search__img" src="./img/svg/search.svg"></img>
          </div>
        </div>
        <section className="content__cards">
          {allCards.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickAddCart={() => console.log('add to cart')}
            onClickFavorite={() => console.log('add favorite')}
          />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;