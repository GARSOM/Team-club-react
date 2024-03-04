import videcard from '../images/icon/videocard.svg'
import proc from '../images/icon/proc.svg'
import ssd from '../images/icon/ssd.svg'
import oper from '../images/icon/oper.svg'
import monik from '../images/icon/monik.svg'
import keyboard from '../images/icon/keyboard.svg'
import headphone from '../images/icon/headphone.svg'
import mouse from '../images/icon/mouse.svg'
import Faq from './Faq'
export default function Config(props) {
    return (
        <div className="container">
            <section className="configuration">
                <div className="container">
                    <div id='config' className="configuration__tab-contents" >
                        <h1 className='title'>{props.zal}</h1>
                        <div className="configuration__tabs">
                            <button className='configuration__tab is-active'>Конфигурация</button>
                        </div>
                        <div className="configuration__tab-content" >
                            <div className="configuration__grid">
                                <div className="configuration__item">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={proc} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">процессор</div>
                                        <div className="configuration__name">{props.proc}</div>
                                    </div>
                                </div>
                                <div className="configuration__item">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={videcard} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">видеокарта</div>
                                        <div className="configuration__name">{props.videocard}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={ssd} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">накопитель</div>
                                        <div className="configuration__name">ssd m2 {props.ssd}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={oper} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">память</div>
                                        <div className="configuration__name">{props.oper}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={monik} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">монитор</div>
                                        <div className="configuration__name">{props.monik}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={keyboard} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">клавиатура</div>
                                        <div className="configuration__name">{props.keyboard}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={mouse} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">мышь</div>
                                        <div className="configuration__name">{props.mouse}</div>
                                    </div>
                                </div>
                                <div className="configuration__item ">
                                    <div className="configuration__icon">
                                        <div className="configuration__icon-bg"><span></span></div>
                                        <img src={headphone} alt="" />
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">гарнитура</div>
                                        <div className="configuration__name">{props.headPhone}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='price' className="configuration__tab-contents">
                        <div className="configuration__tabs" >
                            <button className='configuration__tab is-active'>Цены</button>
                        </div>
                        <div className="configuration__tab-content" >
                            <div className="configuration__grid">
                                <div className="configuration__item2">
                                    <div className="configuration__icon2">
                                        <div className="configuration__type2">1 Час</div>
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type"></div>
                                        <div className="configuration__name22">{props.OneHourse}</div>
                                    </div>
                                </div>
                                <div className="configuration__item2 ">
                                    <div className="configuration__icon2">
                                        <div className="configuration__type2">3 Часа</div>
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">1 час = {props.threeOne}</div>
                                        <div className="configuration__name2">{props.threeHourse}</div>
                                    </div>
                                </div>
                                <div className="configuration__item2 ">
                                    <div className="configuration__icon2">
                                        <div className="configuration__type2">4 Часа</div>
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">1 час = {props.foureOne}</div>
                                        <div className="configuration__name2">{props.foureHourse}</div>
                                    </div>
                                </div>
                                <div className="configuration__item2 ">
                                    <div className="configuration__icon2">
                                        <div className="configuration__type2">12 Часа</div>
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">1 час = {props.twelveOne}</div>
                                        <div className="configuration__name2">{props.twelveHourse}</div>
                                    </div>
                                </div>
                                <div className="configuration__item2 ">
                                    <div className="configuration__icon2">
                                        <div className="configuration__type2">Пакет ночь</div>
                                    </div>
                                    <div className="configuration__info">
                                        <div className="configuration__type">1 час = {props.nightOne}</div>
                                        <div className="configuration__name2">{props.night}</div>
                                    </div>
                                </div>
                            </div>
                            <Faq />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}