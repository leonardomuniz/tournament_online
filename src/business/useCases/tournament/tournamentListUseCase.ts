import { FastifyReply } from 'fastify'
import { TournamentRepository } from '../../../functions/repositories/tournamentRepository'

export class TournamentListUseCase {
  async run(reply: FastifyReply) {
    const tournament = new TournamentRepository()

    const response = await tournament.list()

    reply.send(response)
  }
}
