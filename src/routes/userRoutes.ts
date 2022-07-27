import express, { Request, Response } from 'express'
import UserController from '../controller/user-controller'

const users = express.Router()

users
    .get('/users', UserController.getUsers)
    .post('/users', UserController.insertNewUser)
    .put('/users/:id', UserController.updateUserById)
    .delete('/users/:id', UserController.deleteUserById)

export default users