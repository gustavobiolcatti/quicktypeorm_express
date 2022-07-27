import express, { Request, Response } from 'express'
import users from './userRoutes'

const routes = (app: any) => {
    app
        .route('/')
        .get((req: Request, res: Response) => {
            res.status(200).json({
                message: 'Servidor iniciado'
            })
        })

    app.use(express.json(), users)
}


export default routes