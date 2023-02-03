import Image from "next/image"
import FindPlaces from "@/components/Landing/FindPlaces"
import CarouselForPlace from "@/components/Landing/CarouselForPlace"
import { useEffect, useState } from "react"
const FindPage = () => {
    return (
        <section className="find-places">
            <div className="container">
                <div className="find-places__main">

                    <div className="find-places__text">
                        <h1>
                            Здесь вы найдете локации для мероприятий
                        </h1>
                        <p>
                            Каждая локация обладает своими особенностями и возможностями, которые позволят детям полностью погрузиться в мир развлечений и веселья. От захватывающих игровых зон до красочных декораций и веселых аттракционов, мы обеспечим незабываемый опыт для ваших детей. Приходите и окунитесь в мир веселья с нашими локациями!
                        </p>
                    </div>
                    <Image src="/images/find-places.jpg" width={600} height={400} alt="hey"></Image>

                </div>
                <CarouselForPlace />
            </div>
        </section>
    )
}

export default FindPage