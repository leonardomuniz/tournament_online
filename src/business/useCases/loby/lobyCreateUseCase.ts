import { FastifyRequest, FastifyReply } from 'fastify'
import { LobyRepository } from '../../../functions/repositories/lobyRepository'
import { lobyDto } from '../../dto/tournament/tournamentDto'

export class lobyCreateUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const normalizeRequest = request.body as lobyDto

    const loby = new LobyRepository()

    const response = await loby.create(normalizeRequest)

    reply.send(response)
  }
}
