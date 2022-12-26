import Publisher from 'App/Models/Publisher'

export default class PublisherService {
  public async save(payloadPublisher: TypePublisher.Save): Promise<TypePublisher.Item> {
    const publisher = await Publisher.create(payloadPublisher)
    return publisher
  }

  public async list(): Promise<TypePublisher.Item[]> {
    const publishers = await Publisher.all()
    return publishers
  }

  public async update(
    id: number,
    payloadPublisher: TypePublisher.Save
  ): Promise<TypePublisher.Item> {
    const publisher = await Publisher.findOrFail(id)
    publisher.publisher = payloadPublisher.publisher
    publisher.contact = payloadPublisher.contact!
    await publisher.save()
    return publisher
  }

  public async delete(id: number): Promise<TypePublisher.Item> {
    const publisher = await Publisher.findOrFail(id)
    await publisher.delete()
    return publisher
  }
}
