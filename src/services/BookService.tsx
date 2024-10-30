import {BookCategoryList, BookList} from "../interfaces/Book.interface";
import axiosInstance from "../api/AxiosInstance";
import {AxiosResponse} from "axios";


/**
 * Fonction pour effectuer la récupération des catégories.
 *
 * @returns {Promise<BookCategoryList | void>}
 */
export const getCategories = (): Promise<BookCategoryList|void> =>
    axiosInstance.get<BookCategoryList>('/categories/', {})
        .then(({data}: AxiosResponse<BookCategoryList>): BookCategoryList => {
            return {
                results: data.results
            };
        },(error): void => {});


export interface BooksFilters {
    type: string,
    value: string,
    page: string,
    pageSize: string
}

/**
 * Fonction pour effectuer la récupération des livres d'une catégorie.
 *
 * @returns {Promise<BookList | void>}
 */
export const getBooksBy = (filters: BooksFilters): Promise<BookList|void> =>
    axiosInstance.get<BookList>('/books/', {params: filters})
        .then(({data}: AxiosResponse<BookList>): BookList => {
            return {
                results: data.results
            };
        },(error): void => {
            throw error
        });