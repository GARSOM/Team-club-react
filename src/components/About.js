import img1 from '../images/svg1.svg'
import img2 from '../images/playstation-svgrepo-com.svg'
export default function About() {
    return (
        
        <div className="about_main">
            
            <div className="about-div">
                <img className='about_img' src={img1}></img>
                <p className='text__p'>45 ПК</p>
            </div>
            <div className="about-div">
                <img className='about_img' src={img2}></img>
                <p className='text__p'>3 PS</p>
            </div>
            <div className="about-div">
                <img className='about_img' src={img1}></img>
                <p className='text__p'>4 категории ПК</p>
            </div>
        </div>
    )
}