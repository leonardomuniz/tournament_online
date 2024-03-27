export interface UserDto {
  idUser?: string
  name: string
  nikname?: string
  email: string
  password: string
  role?: Role
  isInTournament?: boolean
  dateBirth: string
  created_at?: Date | string
  updated_at?: Date | string
}

enum Role {
  PLAYER = 'player',
  SHOPKEEPER = 'shopkeeper',
}
