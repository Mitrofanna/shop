function Header() {
    return (
        <header className="header">
        <div className="header__left">
          <img />
          <div className="header__info"> 
            <h3 className="header__title">Mitrofan Shop</h3>
            <p className="header__name">Лучший магазин</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img />
            <span>1205 p.</span>
          </li>
          <li>
            <img />
            <span>Избранное</span>
          </li>
          <li>
            <img />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
    )
}

export default Header;