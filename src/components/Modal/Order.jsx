import { useEffect, useState } from "react"
import CarouselForOrderPlace from "../Landing/CarouselForOrderPlace"
import CarouselForOrderAnimators from "../Landing/CarouselForOrderAnimators"
const Order = ({ active, setActive }) => {
    const [sum, setSum] = useState(0)
    const [sumAnim, setSumAnim] = useState(0)
    const [sumPlace, setSumPlace] = useState(0)
    const [date, setDate] = useState("")
    const [kol, setKol] = useState("") 
    const [email, setEmail] = useState("")
    const [place, setPlace] = useState("")
    const [animator, setAnimator] = useState("")
    const grammatic = kol => {
        if (kol > 1) return `${kol} людей`
        else return `${kol} человека`
    }
    const setOrder = e => {
        e.preventDefault()
        alert(`
            Вы заказали аниматора ${animator.name} в локацию ${place.name}, которая находится на ${place.location}. 
            Вы должны придти в ${date} и вас должно быть в количестве ${grammatic(kol)}. Итоговая сумма составляет ${sum} рублей
        `)
        setActive(false)
    }
    const getChoosenOne = (data) => {
        if (data) {
            setSumPlace(Number(data.price))
            setPlace(data)
        }
    }
    const getChoosenTwo = (data) => {
        if (data) {
            setSumAnim(Number(data.price))
            setAnimator(data)
        }
    }
    useEffect(() => {
        setSum(sumAnim + sumPlace)
    }, [sumAnim, sumPlace])
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="order" onClick={e => e.stopPropagation()}>
                <div className="order__inner">
                    <h1>Оформление заказа</h1>
                    <form className="order__form" onSubmit={setOrder}>
                        <div className="form__date">
                            <input type="date" value={date} onChange={e => {setDate(e.target.value)}} />
                            <label>Когда вы хотите провести праздник?</label>
                        </div>
                        <div className="form__number">
                            <input type="number" value={kol} onChange={e => {setKol(e.target.value)}} />
                            <label>Сколько вас будет?</label>
                        </div>
                        <div className="form__email">
                        <input type="email" value={email} onChange={e => {setEmail(e.target.value)}} />
                        <label>Ваша почта</label>
                        </div>
                        <h1>Выберите локацию</h1>
                        <CarouselForOrderPlace chooseWhat={getChoosenOne} />
                        <h1>Выберите Аниматора</h1>
                        <CarouselForOrderAnimators chooseWhat={getChoosenTwo} />
                        <label>Итого: {sum}</label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order