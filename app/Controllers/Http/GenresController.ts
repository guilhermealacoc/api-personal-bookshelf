import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GenreService from 'App/Services/GenreService'

export default class GenresController {
  private genreService = new GenreService()

  public async store({ request, response }: HttpContextContract) {
    const payloadGenre = request.only(['genre'])
    const genre = await this.genreService.save(payloadGenre)
    return response.status(201).json(genre)
  }

  public async listAll({ response }: HttpContextContract) {
    const genres = await this.genreService.list()
    return response.status(200).json(genres)
  }

  public async update({ params, request }: HttpContextContract) {
    const payloadGenre = request.only(['genre'])
    const genre = await this.genreService.update(params.id, payloadGenre)
    return genre
  }

  public async delete({ params, response }: HttpContextContract) {
    const genre = await this.genreService.delete(params.id)
    return response.status(200).json(genre)
  }
}
