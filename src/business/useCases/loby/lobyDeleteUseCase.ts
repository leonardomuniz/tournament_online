import { FastifyReply, FastifyRequest } from 'fastify'
import { LobyRepository } from '../../../functions/repositories/lobyRepository'

export class lobyDeleteUseCase {
  async run(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.headers as { id: string }
    const loby = new LobyRepository()

    const response = await loby.delete(id)

    reply.send(response)
  }
}
