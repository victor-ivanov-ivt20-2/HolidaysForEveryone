require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

const PORT = process.env.APP_PORT || 5000

app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/files', express.static(path.join(__dirname, 'storage/public')))
app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:2023",
        "http://127.0.0.1:2023",
        "https://holidays-for-everyone.vercel.app/"
    ]
}))

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Сервер бежит со скоростью = ${PORT} м/c`))
    }
    catch (e) {
        console.log(e)
    }
}

start()