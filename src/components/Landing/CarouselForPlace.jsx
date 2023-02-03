import { useState, useEffect } from "react"
import Carousel from "./Carousel"
import axios from 'axios'
import Image from 'next/image'
const CarouselForPlace = () => {
    const [places, setPlaces] = useState([])
    const [fullWidth, setFullWidth] = useState({
        width: "1280px"
    })
    const getPlaces = async () => {
        return axios.get("/api/places").then(response => {
            setPlaces(JSON.parse(response.data))
            if (JSON.parse(response.data).length > 4) {
                setFullWidth({
                    width: ((JSON.parse(response.data).length * 320) + 1280) + "px"
                })
            }
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
                    "" : <div className="places__hr"></div>}
            </>

        )
    })

    return (
        <>
            {   places.length > 1 ?
                <Carousel
                width={290}
                screen={1280}
                items={places}
                listItems={listItems}
                fullWidth={fullWidth} /> : ""
            }
        </>
    )
}

export default CarouselForPlace