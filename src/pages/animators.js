import Carousel from "@/components/Landing/Carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from 'axios'
const AnimatorsPage = () => {
    const [animators, setAnimators] = useState([])
    const [fullWidth, setFullWidth] = useState({
        width: "1280px"
    })

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
                    <h1 className="places__item-name">
                        {animator.name}
                    </h1>
                    <div onClick={() => {
                        console.log("hey")
                    }}>
                        <Image className="places__item-img" src={animator.img}
                        width={250} height={250} alt={animator.name} />
                    </div>
                    
                    <span className="places__item-price">
                        {animator.price} &#8381;
                    </span>
                </li>
                {index === animator.length - 1 ?
                    "" : <div className="places__hr"></div>}
            </>

        )
    })
    return (
        <section className="find-places">
            <div className="container">
                <div className="find-places__main">

                    <div className="find-places__text">
                        <h1>
                            Лучшие аниматоры города здесь!
                        </h1>
                        <p>
                            Каждый аниматор прошёл проверку у психолога и является профессионалом своего дела
                        </p>
                    </div>
                    <Image src="/images/animators.png" width={450} height={450} alt="hey" style={{ marginRight: "100px" }}></Image>

                </div>
                {animators.length > 1 ?
                    <Carousel
                        width={290}
                        screen={1280}
                        items={animators}
                        listItems={listItems}
                        fullWidth={fullWidth} /> : ""
                }
            </div>
        </section>
    )
}

export default AnimatorsPage