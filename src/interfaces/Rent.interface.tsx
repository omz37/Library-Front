import {Book} from "./Book.interface";

export interface RentsResponse {
    rents: Rent[]
}
export interface Rent {
    id: number,
    bookID: string,
    status: string,
    bookDTO: Book
}

export interface rentRequestBody {
    "userID": number,
    "bookID": string
}