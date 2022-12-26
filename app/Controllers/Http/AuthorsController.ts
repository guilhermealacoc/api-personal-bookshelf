import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthorService from 'App/Services/AuthorService'
export default class AuthorsController {
  private authorService = new AuthorService()

  public async store({ request, response }: HttpContextContract) {
    const payloadAuthor = request.only(['name', 'surname', 'nationality'])
    const author = await this.authorService.save(payloadAuthor)
    return response.status(201).json(author)
  }
}
