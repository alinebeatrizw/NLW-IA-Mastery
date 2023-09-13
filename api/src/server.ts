import { fastify } from 'fastify'
import { prisma } from './lib/prisma'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/uploadVideo'
import { createTranscriptionRoute } from './routes/create-transcricao'

const app = fastify()
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server rodando!')
})