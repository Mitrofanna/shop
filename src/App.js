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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://660317272393662c31ce874c.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://660add09ccda4cbc75dbf3f3.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://660317272393662c31ce874c.mockapi.io/items');
       
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }  
    fetchData();
    
  }, []);

  const onAddItem = async (obj) => {
    try {
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));//фильтрует удаленный обьект из корзины 
      } else {
        const {data} = await axios.post('https://660317272393662c31ce874c.mockapi.io/cart', obj); 
        setCartItems(prev => [...prev, data]);//обновляет пред. состояние
      }
    } catch(error) {
      alert('что-то пошло не так', error)
    }
  };

  const onAddFavorites = async (obj) => {
    try {
      if(favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://660add09ccda4cbc75dbf3f3.mockapi.io/favorites/${obj.id}`);
        //сразу обновляет состояние списка и удаляет выбранный элемент
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));;
      } else {
        //ждет сначала данные с сервера, потом обновляет состояние
        const {data} = await axios.post('https://660add09ccda4cbc75dbf3f3.mockapi.io/favorites', obj); 
        setFavorites(prev => [...prev, data]);
      }
    } catch(error) {
      alert('что-то пошло не так', error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://660317272393662c31ce874c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));;
  };
  
  const onSearchItems = (event) => {
    setSearchItems(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} items={favorites} />
        <Routes>
          <Route path="/" element={
          <Home
            items={items}
            searchItems={searchItems}
            onAddItem={onAddItem}
            onAddFavorites={onAddFavorites}
            onSearchItems={onSearchItems}
            cartItems={cartItems}
            favorites={favorites}
            isLoading={isLoading}
          />}>
          </Route>
          <Route path="/favorites" element={
          <Favorites
            items={favorites}
            onAddFavorites={onAddFavorites} 
          />}>
          </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;