

export default function handler(req, res) {
    const places = [
        {
            name: "Cinnabon",
            location: "ул. Короленко, 2",
            price: "3500",
            img: "/images/cinnabon.jpg"
        },
        {
            name: "Вкус инноваций",
            location: "ул. Дзержинского, 76",
            price: "1400",
            img: "/images/innovation.jpg"
        },
        {
            name: "Додо Пицца",
            location: "ул. Кирова, 31",
            price: "2000",
            img: "/images/dodo-pizza.jpg"
        },
        {
            name: "Махтал",
            location: "ул. Кирова, 2",
            price: "1500",
            img: "/images/mahtal.png"
        },{
            name: "Cinnabon",
            location: "ул. Короленко, 2",
            price: "3500",
            img: "/images/cinnabon.jpg"
        },
        {
            name: "Вкус инноваций",
            location: "ул. Дзержинского, 76",
            price: "1400",
            img: "/images/innovation.jpg"
        },
        {
            name: "Додо Пицца",
            location: "ул. Кирова, 31",
            price: "2000",
            img: "/images/dodo-pizza.jpg"
        },
        {
            name: "Махтал",
            location: "ул. Кирова, 2",
            price: "1500",
            img: "/images/mahtal.png"
        },
    ]

    res.status(200).json(JSON.stringify(places))
}