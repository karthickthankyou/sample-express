import dotenv from 'dotenv'
dotenv.config()

export const port: string = process.env.PORT || '3000'
