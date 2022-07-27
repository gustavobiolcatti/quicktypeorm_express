import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const db = AppDataSource.manager

export default class UserController {
    //GET
    static getUsers = async (req: Request, res: Response) => {
        try {
            const users = await db.find(User)

            res.status(200).json(users)

        } catch (err) {
            res.status(400).json({
                message: `Erro ao buscar usuários`,
                erro: err.message
            })
        }

    }

    //POST
    static insertNewUser = async (req: Request, res: Response) => {
        try {
            const newUser = new User()
            const param = req.body

            newUser.age = param.age
            newUser.firstName = param.firstName
            newUser.lastName = param.lastName

            await db.save(newUser)

            res.status(201).json({
                status: 201,
                message: `Usuário criado`,
                user: newUser
            })

        } catch (err) {
            res.status(400).json({
                message: `Erro ao cadastrar usuário`,
                erro: err.message
            })
        }
    }

    //PUT
    static updateUserById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userUpdate = req.body

            db.update(User, id, userUpdate)

            res.status(200).json({
                status: 200,
                message: 'Usuário atualizado'
            })

        } catch (err) {
            res.status(400).json({
                message: `Erro ao atualizar usuário`,
                erro: err.message
            })
        }
    }

    //DELETE
    static deleteUserById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            db.delete(User, id)

            res.status(200).json({
                status: 200,
                message: `Usuário com ID ${id} excluído`
            })

        } catch (err) {
            res.status(400).json({
                message: `Erro ao remover usuário`,
                erro: err.message
            })
        }
    }
}