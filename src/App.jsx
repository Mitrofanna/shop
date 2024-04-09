import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { API_ITEMS, API_FAVORITES, API_CART} from "./api";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./app-context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchItems, setSearchItems] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try{
        const cartResponse = await axios.get(API_CART);
        const favoritesResponse = await axios.get(API_FAVORITES);
        const itemsResponse = await axios.get(API_ITEMS);
         
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch(error) {
        alert('не загрузились данные');
      }
    }  
    fetchData();
    
  }, []);

  const onAddItem = async (obj) => {
    try {
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(API_CART + '/' + obj.id);
      } else {
        const {data} = await axios.post(API_CART, obj); 
        setCartItems(prev => [...prev, data]);
      }
    } catch(error) {
      alert('не получилось добавить в корзину', error)
    }
  };

  const onAddFavorites = async (obj) => {
    try {
      if(favorites.find(item => item.title === obj.title)) {
        setFavorites((prev) => prev.filter((item) => item.title !== obj.title));;
        axios.delete(API_FAVORITES + '/' + obj.id);
      } else {
        const {data} = await axios.post(API_FAVORITES, obj); 
        setFavorites(prev => [...prev, data]);
      }
    } catch(error) {
      alert('не получилось добавить в избранные', error);
    }
  };

  const isItemChecked = (title) => {
    return cartItems.some((obj) => obj.title === title);
  };

  const onRemoveItem = (id) => {
    axios.delete(API_CART + '/' + id);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };
  
  const onSearchItems = (event) => {
    setSearchItems(event.target.value);
  };

  const onCloseCart = () => {
    setCartOpened(false);
  }

  const onOpenCart = () => {
    setCartOpened(true);
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      setCartItems, 
      favorites, 
      isItemChecked, 
      setCartOpened, 
      onCloseCart, 
      onOpenCart, 
      onRemoveItem,
      onAddFavorites,
      onAddItem,
      searchItems,
      onSearchItems,
      isLoading
      }}>
    <div className="wrapper">
      {cartOpened && <Drawer />}
      <Header />
        <Routes>
          <Route path="" element={
            <Home />}>
          </Route>
          <Route path="favorites" element={
            <Favorites />}>
          </Route>
          <Route path="orders" element={
            <Orders />}>
          </Route>
      </Routes>
      <Footer />
    </div>
  </AppContext.Provider>
  );
}

export default App;