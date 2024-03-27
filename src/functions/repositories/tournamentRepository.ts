import { TournamentDto } from '../../business/dto/tournament/tournamentDto'
import { UserDto } from '../../business/dto/users/userDto'
import prismaClient from '../prisma'

export class TournamentRepository {
  async create(input: TournamentDto) {
    const { date, locale, name, type } = input
    return prismaClient.tournaments
      .create({
        data: {
          date,
          name,
          locale,
          type,
          matches: {
            create: [],
          },
          players: {
            create: [],
          },
          ranking: {
            create: [],
          },
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

  async updatePlayers(userId: string, input: Partial<TournamentDto>) {
    const findTournament = await this.findById(userId)
    const { date, locale, name, type } = input

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
            connect: [{ idUser: '6602c82fb233971e338d5afe' }],
          },
        },
        include: {
          players: true,
        },
      })
      .catch((error) => console.error(error))
  }
}
