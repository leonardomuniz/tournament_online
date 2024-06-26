import { lobyDto } from '../../business/dto/tournament/tournamentDto'
import prismaClient from '../prisma'

export class LobyRepository {
  async create(input: lobyDto) {
    const { tournamentsId } = input
    return prismaClient.lobby
      .create({
        data: {
          players: {
            create: [],
          },
          tournamentsId,
        },
      })
      .catch((error) => console.error(error))
  }

  async findById(lobyId: string) {
    return await prismaClient.lobby
      .findFirst({
        where: {
          idLoby: lobyId,
        },
        include: {
          players: true,
        },
      })
      .catch((error) => console.error(error))
  }

  async list() {
    return await prismaClient.lobby
      .findMany({
        include: {
          players: true,
        },
      })
      .catch((error) => console.error(error))
  }

  async delete(lobyId: string) {
    const findLoby = await this.findById(lobyId)

    if (!findLoby) {
      throw console.error("tournament doesn't exist")
    }

    await prismaClient.lobby
      .delete({
        where: {
          idLoby: findLoby.idLoby,
        },
      })
      .catch((error) => console.error(error))

    return { ok: true }
  }

  async update(lobyId: string, userId: string) {
    const findLoby = await this.findById(lobyId)
    console.log(' imput', userId)

    return await prismaClient.lobby
      .update({
        where: {
          idLoby: findLoby?.idLoby,
        },
        data: {
          players: {
            connect: [{ idUser: userId }],
          },
        },
        include: {
          players: true,
          tournament: true,
        },
      })
      .catch((error) => console.error(error))
  }
}
