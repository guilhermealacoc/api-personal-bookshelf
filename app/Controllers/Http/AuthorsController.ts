import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthorService from 'App/Services/AuthorService'
export default class AuthorsController {
  private authorService = new AuthorService()

  public async store({ request, response }: HttpContextContract) {
    const payloadAuthor = request.only(['name', 'surname', 'nationality'])
    const author = await this.authorService.save(payloadAuthor)
    return response.status(201).json(author)
  }

  public async listAll({ response }: HttpContextContract) {
    const authors = await this.authorService.list()
    return response.status(200).json(authors)
  }

  public async update({ params, request }: HttpContextContract) {
    const payloadAuthor = request.only(['name', 'surname', 'nationality'])
    const author = await this.authorService.update(params.id, payloadAuthor)
    return author
  }
}
