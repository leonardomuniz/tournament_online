import { UserDto } from '../users/userDto'

export interface TournamentDto {
  name: string
  date: string
  locale: string
  type: string
  ranking?: Ranking[]
  players?: UserDto[]
  matches?: Matches[]
  playersId?: UserDto
}

interface Ranking {
  name: string
  victories: number
  defeats: number
  draws: number
}

interface Matches {
  player: UserDto
  oponent: UserDto
  date: string
  winnerScore?: number
  loserScore?: number
  winner?: string
}

export interface lobyDto {
  players: UserDto
  tournamentsId: string
}
