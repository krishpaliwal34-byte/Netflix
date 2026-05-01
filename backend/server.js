import express from 'express'
import cors from 'cors'
import connectDB from './database.js'
import router from './routes.js'
const PORT = 4900;
const app = express();
app.use(express.json())
app.use(cors())
connectDB();
app.use("/api/auth" , router)
app.listen(PORT , () => {console.log(`Server Start ${PORT}`)})