import Promo from "../components/Promo";
import Empty from "../components/Empty";
import Card from "../components/Card";
import ContentLoader from "react-content-loader";
import { useContext } from "react";
import AppContext from "../app-context";

function Home({
  items, 
  searchItems, 
  onAddItem, 
  onAddFavorites, 
  onSearchItems,
  // favorites, 
  isLoading
}) {
  const {favorites} = useContext(AppContext);
  
  const itemsSorted = items.filter((item) => item.title.toLowerCase().includes(searchItems.toLowerCase()));
    
  return (
      <main className="content">
      <Promo /> 
      <div className="content__wrapper">
        <h1 className="content__title">{searchItems ? `Поиск по запросу: ${searchItems}` : `Все товары`} </h1>
        <div className="search">
          <input id="search" className="search__input" type="text" value={searchItems} onChange={onSearchItems} />
          <label htmlFor="search" className="search__label">Поиск...</label>
          <svg className="search__img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="#f2f2f2">
              <path d="m17.7 16.06-3.48-3.48a7.63 7.63 0 0 0 1.53-4.7c0-4.4-3.48-7.88-7.88-7.88A7.81 7.81 0 0 0 0 7.88c0 4.4 3.48 7.87 7.88 7.87 1.73 0 3.37-.61 4.7-1.53l3.48 3.47c.2.2.4.31.82.31.6 0 1.12-.51 1.12-1.13 0-.2-.1-.5-.3-.81ZM2.24 7.88a5.67 5.67 0 0 1 5.63-5.63 5.67 5.67 0 0 1 5.62 5.63 5.67 5.67 0 0 1-5.63 5.62 5.67 5.67 0 0 1-5.62-5.63Z"/>
          </svg>
        </div>
      </div>
      <section className="content__cards">
        {isLoading ? Array(8).fill(
          <div className="card">
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
          </div>)
          : <>
          {itemsSorted.length > 0 ? itemsSorted.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={favorites.some((obj) => Number(obj.id) === Number(item.id))}
            onClickAddCart={(obj) => onAddItem(obj)}
            onClickFavorite={(obj) => onAddFavorites(obj)}
          />
          )) : <Empty />} 
        </> 
        }
      </section>
    </main>
  );
}

export default Home;