function Footer() {
    return (
        <div className="footer">
            <h3 className="footer__title">Разработано Mitrofan Corporation</h3>
            <ul className="footer__list">
                <li className="footer__item">
                    <h4 className="footer__description">О разработчике:</h4>
                    <img className="footer__avatar"></img>
                    <p className="footer__text">Митрофанова Анастасия<br></br>Фронтенд-разработчик</p>
                </li>
                <li>
                    <h4 className="footer__description">Контакты:</h4>
                    <img className="footer__social"></img>
                    <img className="footer__social"></img>
                    <img className="footer__social"></img>
                </li>
            </ul>
        </div>
    );
}

export default Footer;