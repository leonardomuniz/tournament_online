import { FastifyRequest, FastifyReply } from 'fastify'
import { UserDto } from '../../dto/users/userDto'
import { UserRepository } from '../../../functions/repositories/userRepository'

export class CreateUserUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const normalizeRequest = request.body as UserDto

    const userFunction = new UserRepository()

    const user = await userFunction.create(normalizeRequest)

    reply.send(user)
  }
}
