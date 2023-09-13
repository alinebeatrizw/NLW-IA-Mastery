import { OpenAI } from 'openai'
import '../../node_modules/dotenv/config'

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})