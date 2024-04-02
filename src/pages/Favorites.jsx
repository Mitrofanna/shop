import Card from "../components/Card";
import Empty from "../components/Empty";

function Favorites({items, onAddItem, onAddFavorites}) {

    console.log(items);
    return (
        <main className="content">
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
                    favorited={true}
                    onClickAddCart={(obj) => onAddItem(obj)}
                    onClickFavorite={onAddFavorites}
                />
                )) : <Empty />}
            </section>
        </main>
    );
}

export default Favorites;