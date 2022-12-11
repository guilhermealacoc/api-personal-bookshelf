declare namespace TypeBook {
  type Save = {
    title: string
    isbn: string
    cover?: string
    description: string
    pages: number
    publication_date: Date
    price: number
    stock: number
    rating?: number
    date_acquired: Date
    language: string
    nationality: string
    translator?: string
    edition: string
    status: string
    author_id: number
    section_id: number
    publisher_id: number
    genre_id: number
  }
  type Item = {
    id: number
    title: string
    isbn: string
    cover?: string
    description: string
    pages: number
    publication_date: Date
    price: number
    stock: number
    rating?: number
    date_acquired: Date
    language: string
    nationality: string
    translator?: string
    edition: string
    status: string
    author_id: number
    section_id: number
    publisher_id: number
    genre_id: number
  }
}
