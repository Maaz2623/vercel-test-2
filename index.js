import express from "express";

const app = express()

app.use('/', (req, res) => {
    res.json({message: "Server Running"})
})

app.use('/users', (req, res) => {
    res.send("Server Running")
})

app.listen(5000, () => console.log("Server running on port 5000"))