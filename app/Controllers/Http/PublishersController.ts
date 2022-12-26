import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PublisherService from 'App/Services/PublisherService'

export default class PublishersController {
  private publisherService = new PublisherService()

  public async store({ request, response }: HttpContextContract) {
    const payloadPublisher = request.only(['publisher', 'contact'])
    console.log(payloadPublisher)

    const publisher = await this.publisherService.save(payloadPublisher)
    return response.status(201).json(publisher)
  }

  public async listAll({ response }: HttpContextContract) {
    const publishers = await this.publisherService.list()
    return response.status(200).json(publishers)
  }

  public async update({ params, request }: HttpContextContract) {
    const payloadPublisher = request.only(['publisher', 'contact'])
    const publisher = await this.publisherService.update(params.id, payloadPublisher)
    return publisher
  }
}
