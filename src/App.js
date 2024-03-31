import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

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
        <Promo />
        <div className="content__wrapper">
          <h1 className="content__title">{searchItems ? `Поиск по запросу: ${searchItems}` : `Все товары`} </h1>
          <div className="search">
            <input id="search" className="search__input" type="text" value={searchItems} onChange={onSearchItems} />
            <label id="search" className="search__label">Поиск...</label>
            <svg className="search__img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="#f2f2f2"><path d="m17.7 16.06-3.48-3.48a7.63 7.63 0 0 0 1.53-4.7c0-4.4-3.48-7.88-7.88-7.88A7.81 7.81 0 0 0 0 7.88c0 4.4 3.48 7.87 7.88 7.87 1.73 0 3.37-.61 4.7-1.53l3.48 3.47c.2.2.4.31.82.31.6 0 1.12-.51 1.12-1.13 0-.2-.1-.5-.3-.81ZM2.24 7.88a5.67 5.67 0 0 1 5.63-5.63 5.67 5.67 0 0 1 5.62 5.63 5.67 5.67 0 0 1-5.63 5.62 5.67 5.67 0 0 1-5.62-5.63Z"/></svg>
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
      <Footer />
    </div>
  );
}

export default App;