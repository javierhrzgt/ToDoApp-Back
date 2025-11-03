import express from "express"
import notesRouter from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors({
    origin:["http://localhost:5173","https://6908164a101ce05ec349d15b--sunny-phoenix-797c27.netlify.app","https://sunny-phoenix-797c27.netlify.app"]
}))

app.use(express.json())
app.use("/api/notes",notesRouter)

const PORT = process.env.PORT || 3001

connectDB()
.then(()=>{
    app.listen(PORT,() =>{
        console.log(`Servidor levantado en http://localhost:${PORT}`)
})
})