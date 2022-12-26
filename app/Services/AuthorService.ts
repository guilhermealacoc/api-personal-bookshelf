import Author from 'App/Models/Author'

export default class AuthorService {
  public async save(payloadAuthor: TypeAuthor.Save): Promise<TypeAuthor.Item> {
    const author = await Author.create(payloadAuthor)
    return author
  }
}
