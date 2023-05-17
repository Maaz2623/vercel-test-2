import express from "express";

const app = express()


app.use('/', (req, res) => {
    res.send("Server Running Successfully")
})

app.listen(5000, () => console.log("Server running on port 5000"))