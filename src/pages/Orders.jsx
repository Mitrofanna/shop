import { useEffect, useState } from "react";
import axios from "axios";
import { API_ORDERS } from "../api";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
                const ordersResponse = await axios.get(API_ORDERS);
      
                setOrders(ordersResponse.data);
            } catch(error) {
                alert('ошибка при получении данных заказов');
            }
        }  
        fetchData();
        
      }, []);

    //Здесь непонятная ошибка при запросе,
    // возвращает сначала пустой массив, потом с данными,
    // поэтому ничего не рендерит
    //console.log(orders);
    // const totalPrice = orders.items.reduce((sum, item) => sum + item.price, 0);

    return (
        <main className="content">
            <h1 className="content__title">Заказы</h1>
            <img className="content__img-order1" width="180" height="190" src="../../img/content/orders-background1.png" alt="Фото наших скейтов."></img>
            <img className="content__img-order2" width="180" height="190" src="../../img/content/orders-background2.png" alt="Фото наших скейтов."></img>
            <section className="orders">
            <p className="orders__about">Заказ, будет доставлен на ваш адрес, в течении 7 дней с момента оформления.</p>
            {orders.map((item, index) => {
                <div key={index} className="orders__block">
                    <h2 className="order__title">Заказ № {item.id}</h2>
                    <h3 className="order__time">Время заказа: {item.createdAt}</h3>
                    <p className="order__description">Вы заказали {item.items.length} товаров, на сумму {} руб.</p>
                </div>
            })}
            </section>
        </main>
    );
}

export default Orders;