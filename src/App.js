import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchItems, setSearchItems] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('https://660317272393662c31ce874c.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://660317272393662c31ce874c.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://660add09ccda4cbc75dbf3f3.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddItem = (obj) => {
    axios.post('https://660317272393662c31ce874c.mockapi.io/cart', obj); 
    setCartItems(prev => [...prev, obj]);//обновляет пред. состояние
  };

  const onAddFavorites = (obj) => {
    axios.post('https://660add09ccda4cbc75dbf3f3.mockapi.io/favorites', obj); 
    setFavorites(prev => [...prev, obj]);
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
      <Header onClickCart={() => setCartOpened(true)} items={favorites} />
        <Routes>
          <Route path="/" element={<Home
            items={items}
            searchItems={searchItems}
            onAddItem={onAddItem}
            onAddFavorites={onAddFavorites}
            onSearchItems={onSearchItems}
          />}>
        </Route>
        <Route path="/favorites" element={<Favorites
          items={favorites} 
        />}>

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;