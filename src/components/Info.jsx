import { Link } from "react-router-dom";
import AppContext from "../app-context";
import { useContext } from "react";

function Info() {
    const {onCloseCart} = useContext(AppContext);
    return (
        <div className="info">
            <h3 className="info__title">Заказ оформлен! Подробности, можно посмотреть<br></br> здесь.</h3>
            <Link to="/orders" className="info__link" onClick={onCloseCart}>
                мои заказы
            </Link>
        </div>
    );
}

export default Info;