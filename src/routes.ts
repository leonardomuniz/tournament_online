import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateUserUseCase } from './business/useCases/user/userCreateUseCase'
import { ListUserUseCase } from './business/useCases/user/userListUseCase'
import { DeleteUserUseCase } from './business/useCases/user/userDeleteUseCase'
import { FindUserUseCase } from './business/useCases/user/userFindUseCase'
import { TournamentCreateUseCase } from './business/useCases/tournament/tournamentCreateUseCase'
import { TournamentListUseCase } from './business/useCases/tournament/tournamentListUseCase'
import { TournamentFindUseCase } from './business/useCases/tournament/tournamentFindUseCase'
import { TournamentDeleteUseCase } from './business/useCases/tournament/tournamnetDeleteUseCase'
import { UserUpdateUseCase } from './business/useCases/user/userUpdateUseCase'
import { TournamentUpdateUseCase } from './business/useCases/tournament/tournamentUpdatePlayerUseCase'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  //users
  fastify.post('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserUseCase().run(request, reply)
  })

  fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListUserUseCase().run(reply)
  })

  fastify.get('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new FindUserUseCase().run(request, reply)
  })

  fastify.delete('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteUserUseCase().run(request, reply)
  })

  fastify.patch('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new UserUpdateUseCase().run(request, reply)
  })

  //tournament
  fastify.post('/tournament', async (request: FastifyRequest, reply: FastifyReply) => {
    return new TournamentCreateUseCase().run(request, reply)
  })

  fastify.get('/tournament/list', async (request: FastifyRequest, reply: FastifyReply) => {
    return new TournamentListUseCase().run(reply)
  })

  fastify.get('/tournament', async (request: FastifyRequest, reply: FastifyReply) => {
    return new TournamentFindUseCase().run(request, reply)
  })

  fastify.delete('/tournament', async (request: FastifyRequest, reply: FastifyReply) => {
    return new TournamentDeleteUseCase().run(request, reply)
  })
  fastify.patch('/tournament/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new TournamentUpdateUseCase().run(request, reply)
  })
}
