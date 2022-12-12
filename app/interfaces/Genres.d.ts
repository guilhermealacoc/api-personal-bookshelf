declare namespace TypeGenre {
  type Save = {
    genre: string
  }
  type Item = {
    id: number
    genre: string
  }

  type Delete = {
    id: number
    genre: string
    deletedAt: Date
  }
}
