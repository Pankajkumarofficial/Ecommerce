import express from 'express'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { connectDB } from './utils/features.js'
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';

const port = 8000
connectDB();
const app = express()

app.use(express.json())

export const myCache = new NodeCache();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// user routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)

app.use("/uploads", express.static("uploads"))
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})