import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() public name: string

  @column() public surname: string

  @column() public nationality: string

  @column() public birth_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ columnName: 'customDeletedAtColumn' })
  public deletedAt?: DateTime
}
