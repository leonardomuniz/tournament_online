import { FastifyReply, FastifyRequest } from 'fastify'
import { UserRepository } from '../../../functions/repositories/userRepository'

export class DeleteUserUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const userFunction = new UserRepository()

    const userResponse = await userFunction.delete(id)

    reply.send(userResponse)
  }
}
