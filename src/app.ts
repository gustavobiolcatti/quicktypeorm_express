import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize()
    .then(() => console.log('Conexão com o banco realizada'))
    .catch(err => console.log(`Erro ao conectar com o banco: ${err}`))

const app = express()

routes(app)

export default app