import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const allCards = [
  {
    id: '1',
    title: 'Желтые кроссы',
    price: 1200,
    imageUrl: './img/content/1.jpg'
  },
  {
    id: '2',
    title: 'Зеленые кроссы',
    price: 1300,
    imageUrl: './img/content/1.jpg'
  },
  {
    id: '3',
    title: 'Красные кроссы',
    price: 1500,
    imageUrl: './img/content/1.jpg'
  }
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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