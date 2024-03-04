import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Hamburger() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div id="menu">
                <div id="menu-bar" className='' onClick={() => setOpen(!isOpen)}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <div className={`nav ${isOpen ? 'change' : ''}`}>
                    <ul>
                        <li><NavLink className='header__bar_link_zal' to='/game'>Игры</NavLink></li>
                        <li><NavLink className='header__bar_link_zal' to='/photo'>Галерея</NavLink></li>
                        <li><NavLink className='header__bar_link_zal' to='/standart'>Стандарт</NavLink></li>
                        <li><NavLink className='header__bar_link_kom' to='/komfort'>Комфорт</NavLink></li>
                        <li><NavLink className='header__bar_link_komplus' to='/komfortplus'>Комфорт +</NavLink></li>
                        <li><NavLink className='header__bar_link_vip' to='/vip'>VIP</NavLink></li>
                    </ul>
                </div>
            </div >
            <div className={`menu-bg ${isOpen ? 'change-bg' : ''}`} id="menu-bg"></div>
        </>
    )
}