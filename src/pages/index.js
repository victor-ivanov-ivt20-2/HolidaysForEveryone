import Image from "next/image"
import MainImage from '../assets/images/main-image.jpg'

import FindPlaces from '@/components/Landing/FindPlaces'
import { useEffect, useState } from "react"
const Main = () => {
  return (
    <div>
      <section className="page-face">
        <div className="container">
          <div className="page-face__text">
            <h1 > Подарим волшебство для Ваших детей!</h1>
            <p>Дорогие родители! Приглашаем вас и ваших детей принять участие в незабываемом празднике! Мы гарантируем веселье, удивления и незабываемые воспоминания для ваших детей. Не пропустите эту возможность подарить своим детям незабываемый день!
            </p>
            <button className="page-face__button">
              Оформить праздник
            </button>
          </div>

          <Image src={MainImage} width="700" height="500" alt="столик" />
        </div>

      </section>
      <section className="page-explaining">
        <div className="container">

        </div>
      </section>
    </div>
  )
}

export default Main