import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://660317272393662c31ce874c.mockapi.io/items').then(res =>{
      return res.json()
    }).then(json => {
      setItems(json)
    });
  }, []);

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
          {items.map((item) => (
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