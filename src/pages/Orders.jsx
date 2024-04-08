import { useEffect, useState } from "react";
import axios from "axios";
import { API_ITEMS, API_ORDERS } from "../api";
//тут невыполняется запрос
function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ordersRes = await axios.get(API_ORDERS);

            setOrders(ordersRes.data);
        }
        fetchData();
    }, []);

    
    // console.log(orders);
    // console.log(orders[0].items.length);

    // const totalPrice = orders[0].items.reduce((sum, item) => sum + item.price, 0);

    return (
        <main className="content">
            <h1 className="content__title">Заказы</h1>
            <img className="content__img-order1" width="180" height="190" src="./img/content/orders-background1.png" alt="Фото наших скейтов."></img>
            <img className="content__img-order2" width="180" height="190" src="./img/content/orders-background2.png" alt="Фото наших скейтов."></img>
            <section className="orders">
            <p className="orders__about">Заказ, будет доставлен на ваш адрес, в течении 7 дней с момента оформления.</p>
                <div className="orders__block">
                    {/* <h2 className="order__title">Заказ № {orders[0].id}</h2>
                    <h3 className="order__time">Время заказа: {orders[0].createdAt}</h3>
                    <p className="order__description">Вы заказали {orders[0].items.length} товаров, на сумму {totalPrice} руб.</p> */}
                </div>
            </section>
        </main>
    );
}

export default Orders;