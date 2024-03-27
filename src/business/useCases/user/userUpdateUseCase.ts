import { FastifyReply, FastifyRequest } from 'fastify'
import { UserRepository } from '../../../functions/repositories/userRepository'
import { UserDto } from '../../dto/users/userDto'

export class UserUpdateUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const userUpdate = request.body as Partial<UserDto>
    const user = new UserRepository()

    const response = await user.update(id, userUpdate)

    reply.send(response)
  }
}
