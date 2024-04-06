import Card from "../components/Card";
import Empty from "../components/Empty";
import AppContext from "../app-context";
import { useContext } from "react";

function Favorites() {
    const {favorites, onAddFavorites, onAddItem} = useContext(AppContext);

    return (
        <main className="content">
            <img className={favorites.length > 0 ? "content__fav-background" : "content__fav-hidden"}  width="220" height="460" src="./img/content/fav-background.png" alt="Фото скейтбордиста."></img>
            <h1 className="content__title">Избранные товары</h1>
            <section className="content__cards">
                {favorites.length > 0 ? 
                favorites.map((item) => (
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