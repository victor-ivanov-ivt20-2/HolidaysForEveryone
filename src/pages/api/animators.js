

export default function handler(req, res) {
    const places = [
        {
            name: "Хагги Вагги",
            price: "5000",
            img: "/images/hagi-vahi.png"
        },
        {
            name: "Игра в Кальмара",
            price: "14000",
            img: "/images/squad.jpg"
        },
        {
            name: "Наруто и Сакура",
            price: "8000",
            img: "/images/naruto.jpg"
        },
        {
            name: "Маршмеллоу",
            price: "12000",
            img: "/images/marsh.jpg"
        },{
            name: "Кисси Мисси",
            price: "3500",
            img: "/images/kissi.jpeg"
        },
        {
            name: "Абобус",
            price: "1400",
            img: "/images/amogus.jpg"
        },
    ]

    res.status(200).json(JSON.stringify(places))
}