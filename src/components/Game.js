import img2 from '../images/game/valik.png'
export default function Game() {
    return (
        <section className="tournament">
            <a name="tournament"></a>
            <h2 className="title__page">Турниры / Игры</h2>
            <div className="tournament__info">
                <p className="tournament__brief">Помимо игр ниже, можно скачать любую игру на Ваше усмотрения, время скачивания
                    бесплатно
                </p>
            </div>
            <p className="subtitle">Популярное</p>
            <div className="tournament__columns">
                <img className="tournament__photo" src={img2} />
                <img className="tournament__photo" src={img2} />
                <img className="tournament__photo" src={img2} />
                <img className="tournament__photo" src="./images/apex.png" />
                <img className="tournament__photo" src="./images/pubg.png" />
                <img className="tournament__photo" src="./images/lol.png" />
                <img className="tournament__photo" src="./images/gta.jpg" />
                <img className="tournament__photo" src="./images/warface.jpg" />
            </div>
            <div className="tournament__columns">
                <img className="tournament__photo" src="./images/warzone.png" />
                <img className="tournament__photo" src="./images/desiny.png" />
                <img className="tournament__photo" src="./images/1674568318_celes-club-p-rast-oboi-na-telefon-pinterest-1.jpg" />
                <img className="tournament__photo" src="./images/minecraft.png" />
                <img className="tournament__photo" src="./images/eft.png" />
                <img className="tournament__photo" src="./images/b4b.png" />
                <img className="tournament__photo" src="./images/war thunder.png" />
                <img className="tournament__photo" src="./images/wot.jpg" />
            </div>
            <p className="subtitle">Игры на PS</p>
            <p className="tournament__brief">Есть более 2000 игр, по подписке PS PLUS. Помимо игр ниже, можно скачать любую
                игру на Ваше усмотрения, время скачивания
                бесплатно
            </p>
            <div className="tournament__columns">
                <img className="tournament__photo" src="./images/fifa-22-hd-phone-wallpaper-1080x1920-uhdpaper.com-123.1_b.jpg" />
                <img className="tournament__photo" src="./images/mk1.jpg" />
                <img className="tournament__photo" src="./images/ufc.jpg" />
                <img className="tournament__photo" src="./images/spider.png" />
                <img className="tournament__photo" src="./images/tekken 7.png" />
            </div>
        </section>
    )
}