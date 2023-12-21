import headerLogo from '../images/logo.png'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={headerLogo} />
            </Link>
            <Link className='header__bar_link' to='/standart'>Стандарт</Link>
            <Link className='header__bar_link' to='/komfort'>Комфорт</Link>
            <Link className='header__bar_link' to='/komfortplus'>Комфорт +</Link>
            <Link className='header__bar_link' to='/vip'>VIP</Link>
            <div className='header__enter'>
                <button className='text_btn'>Вход</button>
            </div>
        </header>
    )
}