import Joi from 'joi'
import ApiError from '../error/ApiError.js'

export default class UsersValidation {
  static async UsersCreatedValidation(data) {
    return Joi.object({
      username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .error(new ApiError(400, "username not found")),
      password: Joi.string()
        .min(5)
        .max(30)
        .error(new ApiError(400, "password not found"))
        .required(),
    }).validateAsync(data)
  }
}