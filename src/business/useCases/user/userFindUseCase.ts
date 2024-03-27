import { FastifyReply, FastifyRequest } from 'fastify'
import { UserRepository } from '../../../functions/repositories/userRepository'

export class FindUserUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const userFunction = new UserRepository()

    const userResponse = await userFunction.findById(id)

    reply.send(userResponse)
  }
}
