import Carousel from "@/components/Landing/Carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from 'axios'
const CarouselForOrderAnimators = (props) => {
    const [animators, setAnimators] = useState([])
    const [fullWidth, setFullWidth] = useState({
        width: "1280px"
    })
    const [choosed, setChoosed] = useState(null)
    const chooseThis = index => {
        props.chooseWhat(animators[index])
        setChoosed(index)
    }
    const getAnimators = async () => {
        return axios.get("/api/animators").then(response => {
            setAnimators(JSON.parse(response.data))
            if (JSON.parse(response.data).length > 4) {
                setFullWidth({
                    width: ((JSON.parse(response.data).length * 320) + 1280) + "px"
                })

            }
        })
    }
    useEffect(() => {
        getAnimators()
    }, [])
    const listItems = animators.map((animator, index) => {
        return (
            <>
                <li className="places__item" key={index}>
                    <h1 className={choosed === index ? "places__item-name places__item-active" : "places__item-name"}>
                        {animator.name}
                    </h1>
                    <div onClick={() => {
                        chooseThis(index)
                    }}>
                        <Image className="places__item-img" src={animator.img}
                            width={250} height={250} alt={animator.name} />
                    </div>

                    <span className="places__item-price">
                        {animator.price} &#8381; за 2 часа
                    </span>
                </li>
                {index === animator.length - 1 ?
                    "" : <div className="places__hr"></div>}
            </>

        )
    })
    return (
        <>{animators.length > 1 ?
            <Carousel
                width={290}
                screen={1280}
                items={animators}
                listItems={listItems}
                fullWidth={fullWidth} /> : ""
        }
        </>


    )
}

export default CarouselForOrderAnimators