import cs2 from '../images/game/CS 2.png'
import dota2 from '../images/game/dota 2.png'
import valorant from '../images/game/valik.png'
import apex from '../images/game/apex.png'
import pubg from '../images/game/pubg.png'
import b4b from '../images/game/b4b.png'
import gtav from '../images/game/gta.jpg'
import desteny from '../images/game/desiny.png'
import lol from '../images/game/lol.png'
import rust from '../images/game/rust.jpg'
import warzone from '../images/game/warzone.png'
import minecraft from '../images/game/minecraft.png'
import eft from '../images/game/eft.png'
import wt from '../images/game/war thunder.png'
import wot from '../images/game/wot.jpg'
import warface from '../images/game/warface.jpg'
import efc from '../images/game/fifa-22-hd-phone-wallpaper-1080x1920-uhdpaper.com-123.1_b.jpg'
import ufc from '../images/game/ufc.jpg'
import tekken from '../images/game/tekken 7.png'

export default function Game() {
    return (
        <section className="tournament">
            <h2 className='title'>Библиотека</h2>
            <div className="tournament__columns">
                <img className="tournament__photo" src={cs2} alt='' />
                <img className="tournament__photo" src={dota2} alt='' />
                <img className="tournament__photo" src={valorant} alt='' />
                <img className="tournament__photo" src={apex} alt='' />
                <img className="tournament__photo" src={pubg} alt='' />
                <img className="tournament__photo" src={minecraft} />
                <img className="tournament__photo" src={gtav} alt='' />
                <img className="tournament__photo" src={desteny} alt='' />
                <img className="tournament__photo" src={lol} alt='' />
                <img className="tournament__photo" src={rust} alt='' />
                <img className="tournament__photo" src={warzone} />
                <img className="tournament__photo" src={b4b} alt='' />
                <img className="tournament__photo" src={eft} alt='' />
                <img className="tournament__photo" src={wt} alt='' />
                <img className="tournament__photo" src={wot} alt='' />
                <img className="tournament__photo" src={warface} alt='' />
            </div>
            <p className="zal__price_title">Игры на PS</p>
            <div className="tournament__columns">
                <img className="tournament__photo" src={efc} alt='' />
                <img className="tournament__photo" src={ufc} alt='' />
                <img className="tournament__photo" src={tekken} alt='' />
            </div>
        </section>
    )
}