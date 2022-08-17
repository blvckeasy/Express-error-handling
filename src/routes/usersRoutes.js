import Express from 'express'
import usersController from '../controllers/usersController.js'

const UsersRouter = Express.Router()

UsersRouter.get('/', usersController.GET)

export default {
  path: "/users",
  router: UsersRouter
}