import { FastifyReply, FastifyRequest } from 'fastify'
import { TournamentRepository } from '../../../functions/repositories/tournamentRepository'

export class TournamentDeleteUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const tournament = new TournamentRepository()

    const response = await tournament.delete(id)

    reply.send(response)
  }
}
