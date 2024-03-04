import headerLogo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useOutsideClick } from "outsideclick-react";
import Hamburger from './Hamburger';
export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const handleOutsideClick = (e) => {
        e.classList.remove('header__bar_menu_active')
    }
    const ref = useOutsideClick(handleOutsideClick)
    return (
        <>
            <Hamburger />
            <header className="header">

                <Link to='/'>
                    <img className="header__logo" src={headerLogo} alt='' />
                </Link>
                <div className='header__bar_tab'>
                    <Link className='header__bar_link_zal' to='/game'>Игры</Link>
                    <Link className='header__bar_link_zal' to='/photo'>Галерея</Link>
                    <nav>
                        <button className='header__bar_link_zal' onClick={() => setOpen(!isOpen)}>ЗАЛ</button>
                        <div ref={ref} className={`header__bar_menu ${isOpen ? 'header__bar_menu_active' : ''}`}>
                            <NavLink className='header__bar_link_std' to='/standart'>Стандарт</NavLink>
                            <NavLink className='header__bar_link_kom' to='/komfort'>Комфорт</NavLink>
                            <NavLink className='header__bar_link_komplus' to='/komfortplus'>Комфорт +</NavLink>
                            <NavLink className='header__bar_link_vip' to='/vip'>VIP</NavLink>
                        </div>
                    </nav>
                </div>
                <div className='header__enter'>
                    <a className='text_btn' target='blank' href='https://teamclub.parazey.com/login'>Вход</a>
                </div>
            </header>
        </>
    )
}