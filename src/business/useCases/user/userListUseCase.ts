import { FastifyReply } from 'fastify'
import { UserRepository } from '../../../functions/repositories/userRepository'

export class ListUserUseCase {
  async run(reply: FastifyReply) {
    const userFunction = new UserRepository()

    const userResponse = await userFunction.list()

    reply.send(userResponse)
  }
}
