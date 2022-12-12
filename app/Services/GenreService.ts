import Genre from 'App/Models/Genre'

export default class GenreService {
  public async save(payloadGenre: TypeGenre.Save): Promise<TypeGenre.Item> {
    const genre = await Genre.create(payloadGenre)
    return genre
  }

  public async list(): Promise<TypeGenre.Item[]> {
    const genres = await Genre.all()
    return genres
  }

  public async update(id: number, payloadGenre: TypeGenre.Save): Promise<TypeGenre.Item> {
    const genre = await Genre.findOrFail(id)
    genre.genre = payloadGenre.genre
    await genre.save()
    return genre
  }

  public async delete(id: number): Promise<TypeGenre.Item> {
    const genre = await Genre.findOrFail(id)
    await genre.delete()
    return genre
  }
}
