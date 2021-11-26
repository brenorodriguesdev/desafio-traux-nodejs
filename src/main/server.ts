import * as dotenv from 'dotenv';
import app from './config/app'
import './config/database'

app.listen(4500)
dotenv.config()
