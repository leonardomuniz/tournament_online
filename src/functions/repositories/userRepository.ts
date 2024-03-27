import { UserDto } from '../../business/dto/users/userDto'
import prismaClient from '../prisma'

export class UserRepository {
  async create(input: UserDto) {
    const { name, email, password, dateBirth, nikname } = input

    return prismaClient.users
      .create({
        data: {
          name,
          email,
          password,
          dateBirth,
          nikname,
        },
      })
      .catch((error) => console.error(error))
  }

  async findById(userId: string) {
    return await prismaClient.users
      .findFirst({
        where: {
          idUser: userId,
        },
      })
      .catch((error) => console.error(error))
  }

  async delete(userId: string) {
    const findUser = await this.findById(userId)

    if (!findUser) {
      throw console.error("user doesn't exist")
    }

    await prismaClient.users
      .delete({
        where: {
          idUser: findUser.idUser,
        },
      })
      .catch((error) => console.error(error))

    return { ok: true }
  }

  async list() {
    return await prismaClient.users.findMany().catch((error) => console.error(error))
  }

  async update(userId: string, input: Partial<UserDto>) {
    const findUser = await this.findById(userId)
    const { name, email, nikname, password } = input

    return await prismaClient.users.update({
      where: {
        idUser: findUser?.idUser,
      },
      data: {
        name,
        email,
        nikname,
        password,
      },
    })
  }
}
