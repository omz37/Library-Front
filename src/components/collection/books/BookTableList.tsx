import * as React from 'react';
import {FC} from "react";
import {Book} from "../../../interfaces/Book.interface";
import BookTableListItem from "./BookTableListItem";

interface BookListProps {
    books: Book[],
    startIndex: number,
    endIndex: number,
}

/**
 * Composant BookTableListItem : Ce composant représente la liste des livres dispos
 *
 * @returns {JSX.Element}
 */
const BookTableList: FC<BookListProps> = ({books, startIndex, endIndex}): JSX.Element => {
    return (
        <tbody>
            {books.slice(startIndex, endIndex).map((book, index) => (
                <BookTableListItem book={book} option={index}/>
            ))}
        </tbody>
    );
}
export default BookTableList;
