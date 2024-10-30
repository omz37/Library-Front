import {ImageInterface} from "./Image.interface";

export interface BookCategory {
    id: string,
    title: string
}

export interface Book {
    id: string,
    category: BookCategory,
    title: string,
    author: string,
    summary: string,
    image: ImageInterface,
    publishDate: string,
    isRented: boolean
}

export interface BookList {
    results: Book[]
}

export interface BookCategoryList {
    results: BookCategory[]
}

export interface BookFilters {
    type: string,
    value: string,
    page: string,
    pageSize: string
}