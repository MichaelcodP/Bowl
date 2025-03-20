import React, { useEffect } from 'react'
import { navLinks } from '../constants/database.js';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'; // Додаємо NavLink
import Logo from "../../../img/logo.svg"
import * as flsFunctions from "../../files/functions.js"
import { initDynamicAdapt } from "../../libs/dynamic_adapt.js";

const OrderButton = () => {
    return (
        <NavLink data-da=".menu__body, 767.98" to="/" className="menu__button button">Order Now</NavLink>
    )
}

const NavItem = ({ id, href, name}) => {
    const resolved = useResolvedPath(href);
    const match = useMatch({ path: resolved.pathname, end: true});

    return (
        <li key={id} className={`menu__item &{match ? 'active' : ''}`}>
        <NavLink to={href} className="menu__link">
            {name}
        </NavLink>
    </li>
    )
}

const NavItems = () => {
    return (
        <ul className="menu__list">
            {navLinks.map(( {id, href, name} ) => (
               <NavItem key={id} id={id} href={href} name={name} />
            ))}            
        </ul>
    )
}

const Navbar = () => {
    useEffect(() => {
        flsFunctions.menuInit(); // Запускаємо бургер-меню після рендеру
        initDynamicAdapt(); // Викликаємо адаптив після рендеру
    }, []); // порожній масив означає, що ефект запуститься тільки один раз.

  return (
    <header className="header">
        <div className="header__body">
            <NavLink to="/" className="header__logo">
                <img src={Logo} alt="Company Logo" />
            </NavLink>
            <div className="header__menu menu">                
                <nav className="menu__body">
                    <NavItems />
                </nav>
                    <OrderButton />
                <button type="button" className="menu__icon icon-menu" aria-label="Toggle menu"><span></span></button>
            </div>
        </div>       
    </header>
  )
}

export default Navbar
