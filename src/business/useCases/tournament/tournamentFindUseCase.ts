import { FastifyReply, FastifyRequest } from 'fastify'
import { TournamentRepository } from '../../../functions/repositories/tournamentRepository'

export class TournamentFindUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const tournament = new TournamentRepository()

    const response = await tournament.findById(id)

    reply.send(response)
  }
}
