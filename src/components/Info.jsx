import { Link } from "react-router-dom";
import AppContext from "../app-context";
import { useContext } from "react";
import dayjs from "dayjs";

function Info({orderId, createdAt}) {
    const orderTime = dayjs(createdAt).format('DD/MM/YYYY');

    const {onCloseCart} = useContext(AppContext);
    return (
        <div className="info">
            <h3 className="info__title">Заказ № {orderId} оформлен!<br></br> {orderTime}<br></br> Подробности, можно посмотреть<br></br> здесь.</h3>
            <Link to="/orders" className="info__link" onClick={onCloseCart}>
                мои заказы
            </Link>
        </div>
    );
}

export default Info;