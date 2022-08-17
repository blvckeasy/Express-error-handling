import UsersValidation from '../validations/UsersValidation.js'

class UserController {
  static async GET (req, res, next) {
    try {
      const { username, password } = req.body
      const data = await UsersValidation.UsersCreatedValidation({ username, password })
  
      return res.status(201).send({
        ok: true,
        data
      })
    } catch (e) {
      next(e)
    }
  }
}

export default UserController