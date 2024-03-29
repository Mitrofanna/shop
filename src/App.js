import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchItems, setSearchItems] = useState('');

  useEffect(() => {
    axios.get('https://660317272393662c31ce874c.mockapi.io/items').then((res) => {
      setItems(res.data)
    })
    axios.get('https://660317272393662c31ce874c.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
  }, []);

  const onAddItem = (obj) => {
    axios.post('https://660317272393662c31ce874c.mockapi.io/cart', obj); 
    setCartItems(prev => [...prev, obj]);//обновляет пред. состояние
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://660317272393662c31ce874c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));//фильтрует удаленный обьект из корзины 
  };
  
  const onSearchItems = (event) => {
    setSearchItems(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <main className="content">
        <section className="promo">
          <img className="promo__small" src="./img/promo/slide1.png" width="120" height="240"></img>
          <img className="promo__midddle" src="./img/promo/slide2.png" width="140" height="280"></img>
          <img className="promo__big" src="./img/promo/slide3.png" width="160" height="320"></img>
          <img className="promo__middle" src="./img/promo/slide4.png" width="140" height="280"></img>
          <img className="promo__small" src="./img/promo/slide5.png" width="120" height="240"></img>
        </section>
        <div className="content__wrapper">
          <h1 className="content__title">{searchItems ? `Поиск по запросу: ${searchItems}` : `Все товары`}</h1>
          <div className="search">
            <input className="search__input" type="text" placeholder="Поиск..." value={searchItems} onChange={onSearchItems} />
            <img className="search__img" src="./img/svg/search.svg" alt="Поиск."></img>
          </div>
        </div>
        <section className="content__cards">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchItems.toLowerCase()))
          .map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickAddCart={(obj) => onAddItem(obj)}
            onClickFavorite={() => console.log('fav')}
          />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;