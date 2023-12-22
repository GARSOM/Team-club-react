import { useState } from 'react'
export default function Faq() {
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    return (
        <>
            <div className="accordion" >
                <div className="accordion-item" onClick={() => setOpen(!isOpen)}>
                    <a>Сохраняется ли время на аккаунте при пакете?</a>
                    <div className={`content ${isOpen ? 'active' : ''}`} >
                        <p>При активации пакета он хранятся на вашем аккаунте в клубе 24 часа</p>
                    </div>
                </div>
                <div className="accordion-item" onClick={() => setOpen2(!isOpen2)}>
                    <a>Когда можно активировать?</a>
                    <div className={`content ${isOpen2 ? 'active' : ''}`} >
                        <p>Пакеты (3, 4, 12) часов доступны с 09:00 до 19:00</p>
                        <p>Пакет (ночной) доступен с 22:30 до 08:00</p>
                    </div>
                </div>
                <div className="accordion-item" onClick={() => setOpen3(!isOpen3)}>
                    <a>А халява ночью есть?</a>
                    <div className={`content ${isOpen3 ? 'active' : ''}`} >
                        <p>Да, каждый 5 (ночной) пакет бесплатно</p>
                    </div>
                </div>
            </div>

        </>
    )
}