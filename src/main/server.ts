import * as dotenv from 'dotenv';
import app from './config/app'
import './config/database'

app.listen(80)
dotenv.config()
