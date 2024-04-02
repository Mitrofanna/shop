import Promo from "../components/Promo";
import Empty from "../components/Empty";
import Card from "../components/Card";

function Home({items, searchItems, onAddItem, onAddFavorites, onSearchItems}) {
    const itemsSorted = items.filter((item) => item.title.toLowerCase().includes(searchItems.toLowerCase()));

    return (
        <main className="content">
        <Promo />
        <div className="content__wrapper">
          <h1 className="content__title">{searchItems ? `Поиск по запросу: ${searchItems}` : `Все товары`} </h1>
          <div className="search">
            <input id="search" className="search__input" type="text" value={searchItems} onChange={onSearchItems} />
            <label id="search" className="search__label">Поиск...</label>
            <svg className="search__img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="#f2f2f2">
                <path d="m17.7 16.06-3.48-3.48a7.63 7.63 0 0 0 1.53-4.7c0-4.4-3.48-7.88-7.88-7.88A7.81 7.81 0 0 0 0 7.88c0 4.4 3.48 7.87 7.88 7.87 1.73 0 3.37-.61 4.7-1.53l3.48 3.47c.2.2.4.31.82.31.6 0 1.12-.51 1.12-1.13 0-.2-.1-.5-.3-.81ZM2.24 7.88a5.67 5.67 0 0 1 5.63-5.63 5.67 5.67 0 0 1 5.62 5.63 5.67 5.67 0 0 1-5.63 5.62 5.67 5.67 0 0 1-5.62-5.63Z"/>
            </svg>
          </div>
        </div>
        <section className="content__cards">
         {itemsSorted.length > 0 ? 
          itemsSorted.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            isFavorite={item.isFavorite}
            isAdded={item.isAdded}
            onClickAddCart={(obj) => onAddItem(obj)}
            onClickFavorite={(obj) => onAddFavorites(obj)}
          />
          )) : <Empty />}
        </section>
      </main>
    );
}

export default Home;