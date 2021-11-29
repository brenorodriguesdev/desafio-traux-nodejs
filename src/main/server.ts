import * as dotenv from 'dotenv';
import app from './config/app'
import './config/database'

app.listen(process.env.PORT || 4500)
dotenv.config()
