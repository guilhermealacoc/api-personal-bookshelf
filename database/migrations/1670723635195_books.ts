import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 50).notNullable()
      table.string('isbn', 13).notNullable()
      table.string('cover', 255)
      table.string('description', 255).notNullable()
      table.integer('pages').notNullable()
      table.timestamp('publication_date').notNullable()
      table.decimal('price').notNullable()
      table.integer('stock').notNullable()
      table.integer('rating')
      table.dateTime('date_acquired').notNullable()
      table.string('language', 20).notNullable()
      table.string('nationality', 20).notNullable()
      table.string('translator', 20)
      table.string('edition', 20).notNullable()
      table.string('status', 20).notNullable()
      table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE')
      table
        .integer('section_id')
        .unsigned()
        .references('id')
        .inTable('sections')
        .onDelete('CASCADE')
      table
        .integer('publisher_id')
        .unsigned()
        .references('id')
        .inTable('publishers')
        .onDelete('CASCADE')
      table.integer('genre_id').unsigned().references('id').inTable('genres').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('deleted_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
