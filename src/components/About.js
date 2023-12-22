import { Link } from 'react-router-dom'
import img1 from '../images/pc_gif.gif'
import img2 from '../images/ps_gif.gif'
import Slider from "./Slider"
export default function About() {
    return (
        <>
            <div className="about_main">
                <div className="about-div">
                    <img className='about_img' src={img1}></img>
                    <div className='about-div_mini'>
                        <p className='text__p'>45 ПК</p>
                        <p ><Link className='header__bar_link_std' to='/standart'>17 Стандарт</Link></p>
                        <p ><Link className='header__bar_link_kom' to='/komfort'>10 Комфорт</Link></p>
                        <p ><Link className='header__bar_link_komplus' to='/komfortplus'>8 Комфорт +</Link></p>
                        <p ><Link className='header__bar_link_vip' to='/vip'>10 VIP</Link></p>
                    </div>
                </div>
                <div className="about-div">
                    <img className='about_img' src={img2}></img>
                    <div className='about-div_mini'>
                        <p className='text__p'>3 PS</p>
                    </div>
                </div>
            </div>
            {/* <Slider /> */}
        </>
    )
}