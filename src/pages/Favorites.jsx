import Card from "../components/Card";
import Empty from "../components/Empty";

function Favorites({items, onAddItem, onAddFavorites}) {
    return (
        <main className="content">
            <img className={items.length > 0 ? "content__fav-background" : "content__fav-hidden"}  width="220" height="460" src="./img/content/fav-background.png"></img>
            <h1 className="content__title">Избранные товары</h1>
            <section className="content__cards">
                {items.length > 0 ? 
                items.map((item) => (
                <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    favorited
                    onClickAddCart={(obj) => onAddItem(obj)}
                    onClickFavorite={onAddFavorites}
                />
                )) : <Empty />}
            </section>
        </main>
    );
}

export default Favorites;