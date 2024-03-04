import { Link } from 'react-router-dom'
import img1 from '../images/pc_gif.gif'
import img2 from '../images/ps_gif.gif'
import Zal from './Zal'
export default function About() {
    return (
        <>
            <div className="about">
                <div className="about__block">
                    <img className='about_img' src={img1} alt=''></img>
                    <div className='about__block-mini'>
                        <p className='title'>45 ПК</p>
                        <p ><Link className='header__bar_link_std' to='/standart'>17 Стандарт</Link></p>
                        <p ><Link className='header__bar_link_kom' to='/komfort'>10 Комфорт</Link></p>
                        <p ><Link className='header__bar_link_komplus' to='/komfortplus'>8 Комфорт +</Link></p>
                        <p ><Link className='header__bar_link_vip' to='/vip'>10 VIP</Link></p>
                    </div>
                </div>
                <div className="about__block">
                    <div className='about__block-mini'>
                        <p className='title'>3 PS Zone</p>
                        <p ><Link className='header__bar_link_std' to='/ps'>PS4 3 места</Link></p>
                        <p ><Link className='header__bar_link_kom' to='/ps'>PS4 6 мест</Link></p>
                        <p ><Link className='header__bar_link_komplus' to='/ps'>PS5 5 мест</Link></p>
                    </div>
                    <img className='about_img' src={img2} alt=''></img>
                </div>
            </div>
            <Zal />
        </>
    )
}