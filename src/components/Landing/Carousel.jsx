import { useEffect, useState } from "react"
import axios from 'axios'
import Image from 'next/image'
import LeftArrow from "@/assets/svg/left"
import RightArrow from "@/assets/svg/right"
const Carousel = (props) => {
    const [current, setCurrent] = useState(0)
    const [items, setItems] = useState(props.items)
    const width = props.width
    const screen = props.screen
    const [move, setMove] = useState({
        transform: "translate(0, 0)"
    })
    const listItems = props.listItems
    
    const toNext = () => {
        if (items.length - current <= 4) return
        const curr = current + 1
        setCurrent(curr)
    }
    const toPrev = () => {
        if (items.length - current >= items.length) return
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
            <ul className="places__list" style={{ ...props.fullWidth, ...move, transition: "all .3s" }}>
                {listItems}
            </ul>
        </div>
    )
}

export default Carousel