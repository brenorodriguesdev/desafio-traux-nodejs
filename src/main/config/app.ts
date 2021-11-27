import cors from 'cors'
import express from 'express'
import setupRoutes from './routes'
import setupSwagger from './swagger'
import path from 'path'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'uploads')))
setupSwagger(app)
setupRoutes(app)

export default app