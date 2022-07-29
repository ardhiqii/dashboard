import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { PrismaClient } from '@prisma/client'
import * as UserCard from "./api/userCard/getUserCard.js"
const prisma = new PrismaClient()
const app = express()
const port = 8000
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res, next) => {
    const data = await UserCard.getData();
    res.status(200).json(data)
})

app.post("/post", async (req, res, next) => {
    const { nama, namaBank, lokasi, nomorBank, currency } = JSON.parse(req.body.data)
    try {
        const posted = await prisma.userCard.create({
            data: {
                nama,
                namaBank,
                lokasi,
                nomorBank: parseInt(nomorBank),
                currency
            }
        })
        console.log(posted);
    } catch (e) {
        console.log(e);
    }

    res.send("berhasil")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})