import Image from "next/image"
import MainImage from '../assets/images/main-image.jpg'
import Order from "@/components/Modal/Order"
import FindPlaces from '@/components/Landing/FindPlaces'
import { useEffect, useState } from "react"
import CarouselForOrderPlace from "@/components/Landing/CarouselForOrderPlace"
import CarouselForOrderAnimators from "@/components/Landing/CarouselForOrderAnimators"
const Main = () => {
  const [orderModal, setOrderModal] = useState(false)

  const chooseWhat = () => {
    console.log("hehe")
  }

  return (
    <div>
      <section className="page-face">
        <div className="container">
          <div className="page-face__text">
            <h1 > Подарим волшебство для Ваших детей!</h1>
            <p>Дорогие родители! Приглашаем вас и ваших детей принять участие в незабываемом празднике! Мы гарантируем веселье, удивления и незабываемые воспоминания для ваших детей. Не пропустите эту возможность подарить своим детям незабываемый день!
            </p>
            <button className="page-face__button" onClick={() => setOrderModal(true)}>
              Оформить праздник
            </button>
          </div>

          <Image src={MainImage} width="700" height="500" alt="столик" />
        </div>

      </section>
      <section className="page-explaining">
        <div className="container">
          <h1>Воспользуйтесь нашими услугами!</h1>
          <p>Наша компания работает уже как 100 лет! Она приносит радость каждому ребенку в дом</p>
          <CarouselForOrderPlace chooseWhat={chooseWhat}></CarouselForOrderPlace>
          <CarouselForOrderAnimators chooseWhat={chooseWhat}></CarouselForOrderAnimators>
        </div>
      </section>
      <Order active={orderModal} setActive={setOrderModal} />
    </div>
  )
}

export default Main