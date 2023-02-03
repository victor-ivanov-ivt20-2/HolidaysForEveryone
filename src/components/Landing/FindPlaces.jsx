import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
const FindPlaces = () => {
    const [places, setPlaces] = useState([])

    
    const getPlaces = async () => {
        return axios.get("/api/places").then(response => {
            setPlaces(JSON.parse(response.data))
            console.log(places)
        })
    }

    useEffect(() => {
        getPlaces()
    }, [])
    const listItems = places.map((place, index) =>
        <li className="places__item" key={index}>
            <h1 className="places__item-name">
                {place.name}
            </h1>
            <span className="places__item-location">
                {place.location}
            </span>
            
            <Image className="places__item-img" src={place.img}
            width={250} height={250} alt={place.name}/>
            <button className="places__item-button">Заказать стол</button>
            <span className="places__item-price">
                {place.price} &#8381;
            </span>
        </li>
    )

    return (
        <>
            <ul className="places__list">
                {listItems}
            </ul>

        </>
    )
}

export default FindPlaces