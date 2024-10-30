import * as React from 'react';
import {FC} from "react";
import {Image} from "react-bootstrap";
import {Book} from "../../../interfaces/Book.interface";
import {NavigateFunction, useNavigate} from "react-router";
import RentButton from "../RentButton";

interface BookListItem {
    book: Book,
    option: number
}

/**
 * Composant BookTableListItem : Ce composant représente un livre dispo
 *
 * @returns {JSX.Element}
 */
const BookTableListItem: FC<BookListItem> = ({book, option}): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    /**
     * Permets de se diriger vers la fiche du livre séléctionné
     */
    const handleBookClick = (): void => {
        navigate(`/book/${book.id}`);
    };

    return (
        <tr key={option}>
            <td className="clickable-card" onClick={handleBookClick}>
                <Image src={book.image.url} className="w-25" />
            </td>
            <td className="clickable-card" onClick={handleBookClick}>{book.title}</td>
            <td>{book.publishDate}</td>
            <td>
                <RentButton book={book} />
            </td>
        </tr>
    );
}
export default BookTableListItem;