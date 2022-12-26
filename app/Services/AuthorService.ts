import Author from 'App/Models/Author'

export default class AuthorService {
  public async save(payloadAuthor: TypeAuthor.Save): Promise<TypeAuthor.Item> {
    const author = await Author.create(payloadAuthor)
    return author
  }

  public async list(): Promise<TypeAuthor.Item[]> {
    const authors = await Author.all()
    return authors
  }

  public async update(id: number, payloadAuthor: TypeAuthor.Save): Promise<TypeAuthor.Item> {
    const author = await Author.findOrFail(id)
    author.name = payloadAuthor.name
    author.surname = payloadAuthor.surname!
    author.nationality = payloadAuthor.nationality!
    await author.save()
    return author
  }
}
