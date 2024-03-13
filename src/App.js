import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="content">
        <div class="content__wrapper">
          <h1 className="content__title">Все товары</h1>
          <div className="search">
            <input className="search__input" type="text" placeholder="Поиск..." />
            <img className="search__img" src="./img/svg/search.svg"></img>
          </div>
        </div>
        <section className="content__cards">
          <Card />
        </section>
      </main>
    </div>
  );
}

export default App;