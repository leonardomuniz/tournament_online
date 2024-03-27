import { FastifyRequest, FastifyReply } from 'fastify'
import { TournamentDto } from '../../dto/tournament/tournamentDto'
import { TournamentRepository } from '../../../functions/repositories/tournamentRepository'

export class TournamentCreateUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const normalizeRequest = request.body as TournamentDto

    const tournament = new TournamentRepository()

    const response = await tournament.create(normalizeRequest)

    reply.send(response)
  }
}
