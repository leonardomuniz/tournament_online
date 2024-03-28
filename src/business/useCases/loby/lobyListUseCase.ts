import { FastifyReply } from 'fastify'
import { LobyRepository } from '../../../functions/repositories/lobyRepository'

export class lobyListUseCase {
  async run(reply: FastifyReply) {
    const loby = new LobyRepository()

    const response = await loby.list()

    reply.send(response)
  }
}
