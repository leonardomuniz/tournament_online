import { TournamentDto, TournamentType } from '../../business/dto/tournament/tournamentDto'
import prismaClient from '../prisma'

export class TournamentRepository {
  async create(input: TournamentDto) {
    const { date, locale, name, ownerId } = input
    return prismaClient.tournaments
      .create({
        data: {
          date,
          name,
          locale,
          type: TournamentType.DUEL,
          isTournamentActive: false,
          roundNumber: 0,
          matches: {
            create: [],
          },
          players: {
            create: [],
          },
          ranking: {
            create: [],
          },
          ownerId,
        },
      })
      .catch((error) => console.error(error))
  }

  async findById(tournamentId: string) {
    return await prismaClient.tournaments
      .findFirst({
        where: {
          idTournament: tournamentId,
        },
      })
      .catch((error) => console.error(error))
  }

  async list() {
    return await prismaClient.tournaments.findMany().catch((error) => console.error(error))
  }

  async delete(tournamentId: string) {
    const findTournament = await this.findById(tournamentId)

    if (!findTournament) {
      throw console.error("tournament doesn't exist")
    }

    await prismaClient.tournaments
      .delete({
        where: {
          idTournament: findTournament.idTournament,
        },
      })
      .catch((error) => console.error(error))

    return { ok: true }
  }

  async updatePlayers(tournamentId: string, input: Partial<TournamentDto>) {
    const findTournament = await this.findById(tournamentId)
    const { date, locale, name, type, ownerId } = input

    return await prismaClient.tournaments
      .update({
        where: {
          idTournament: findTournament?.idTournament,
        },
        data: {
          date,
          locale,
          name,
          type,
          players: {
            connect: [{ idUser: tournamentId }],
          },
          ownerId,
        },
        include: {
          players: true,
        },
      })
      .catch((error) => console.error(error))
  }
}
