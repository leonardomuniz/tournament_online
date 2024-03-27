import { FastifyReply, FastifyRequest } from 'fastify'
import { TournamentDto } from '../../dto/tournament/tournamentDto'
import { TournamentRepository } from '../../../functions/repositories/tournamentRepository'

export class TournamentUpdateUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const userUpdate = request.body as Partial<TournamentDto>
    const tournament = new TournamentRepository()

    const response = await tournament.updatePlayers(id, userUpdate)

    reply.send(response)
  }
}
