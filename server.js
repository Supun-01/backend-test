const express = require("express")
const app = express()
const port = 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRouter.js"))

app.listen(port, () => {
    console.log(`Port: ${port}`)
})