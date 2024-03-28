import { FastifyReply, FastifyRequest } from 'fastify'
import { lobyDto } from '../../dto/tournament/tournamentDto'
import { LobyRepository } from '../../../functions/repositories/lobyRepository'
import { UserRepository } from '../../../functions/repositories/userRepository'

export class lobyUpdateUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const { players } = request.body as lobyDto

    const loby = new LobyRepository()
    const user = new UserRepository()

    const userId = players.idUser!
    const getUser = await user.findById(userId)

    const response = await loby.update(id, getUser!.idUser)

    reply.send(response)
  }
}
