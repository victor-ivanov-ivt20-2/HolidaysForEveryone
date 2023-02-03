import { useEffect, useState } from "react"
import axios from 'axios'
import Image from 'next/image'
import LeftArrow from "@/assets/svg/left"
import RightArrow from "@/assets/svg/right"
const CarouselPlaces = () => {
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')
    const [current, setCurrent] = useState(0)
    const [places, setPlaces] = useState([])

    const width = 290
    const screen = 1280
    const [style, setStyle] = useState({
        width: "1280px"
    })
    const [move, setMove] = useState({
        transform: "translate(0, 0)"
    })
    const getPlaces = async () => {
        return axios.get("/api/places").then(response => {
            setPlaces(JSON.parse(response.data))
            if (JSON.parse(response.data).length > 4) {
                setStyle({
                    width: ((JSON.parse(response.data).length * 320) + 1280) + "px"
                })

            }
            console.log(places)
        })
    }

    useEffect(() => {
        getPlaces()
    }, [])

    const listItems = places.map((place, index) => {
        return (
            <>
                <li className="places__item" key={index}>
                    <h1 className="places__item-name">
                        {place.name}
                    </h1>
                    <span className="places__item-location">
                        {place.location}
                    </span>

                    <Image className="places__item-img" src={place.img}
                        width={250} height={250} alt={place.name} />
                    <button className="places__item-button">Заказать стол</button>
                    <span className="places__item-price">
                        {place.price} &#8381;
                    </span>
                </li>
                {index === places.length - 1 ?
                    "" : <div className="places__hr"></div>  }
            </>

        )
    })
    const toNext = () => {
        if (places.length - current <= 4) return
        const curr = current + 1
        setCurrent(curr)
    }
    const toPrev = () => {
        if (places.length - current >= places.length) return
        const prev = current - 1
        setCurrent(prev)
    }
    useEffect(() => {

        setMove({
            transform: "translate(" + (-(width + 30) * current) + "px, 0)"
        })
    }, [current])
    return (

        <div style={{ overflow: "hidden", position: "relative" }}>
            <button className="places__left" onClick={toPrev}><LeftArrow /></button>
            <button className="places__right" onClick={toNext}><RightArrow /></button>
            <ul className="places__list" style={{ ...style, ...move, transition: "all .3s" }}>
                {listItems}
            </ul>
        </div>
    )
}

export default CarouselPlaces