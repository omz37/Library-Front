import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Col, Container, Row, Table} from "react-bootstrap";
import {BookList} from "../../../interfaces/Book.interface";
import {getBooksBy} from "../../../services/BookService";
import {useLocation, useParams} from "react-router";
import BookTableList from "./BookTableList";
import Title from "../../utils/Title";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {
    FILTER_TYPE_CATEGORY,
    INITIAL_PAGE,
    INITIAL_PAGE_SIZE,
    ITEMS_PER_PAGE
} from "../../../constants/PaginationConstants";
import TablePagination from "../../pagination/TablePagination";
import {Params} from "react-router-dom";


/**
 * Composant BooksMainPage : Ce composant représente les livres d'une catégorie
 *
 * @returns {JSX.Element} - Renvoie un élément JSX
 */
const BooksMainPage: FC = (): JSX.Element => {
    const [books, setBooks]: [undefined | BookList, Dispatch<SetStateAction<void | BookList>>] = useState<BookList | undefined>();
    const { categoryId }: Readonly<Params> = useParams();
    const [currentPage, setCurrentPage]: [number, Dispatch<SetStateAction<number>>] = useState(1);
    const [itemsPerPage, setItemsPerPage]: [number, Dispatch<SetStateAction<number>>] = useState(3);
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const filters: {type: string, value: string, page: string, pageSize: string}  = {
        type: FILTER_TYPE_CATEGORY,
        value: categoryId,
        page: INITIAL_PAGE,
        pageSize: INITIAL_PAGE_SIZE
    }

    /**
     * Permets de changer la page actuelle
     */
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    /**
     * Permets de changer le nombre d'items par page
     */
    const handleItemsPerPageChange = (items: number) => {
        setCurrentPage(1)
        setItemsPerPage(items);
    };

    /**
     * Permets de récupérer les livres dans l'Api
     */
    const setBooksContent = async (): Promise<void | BookList> => {
        setBooks(await getBooksBy(filters));
    };

    useEffect(() => {
        setBooksContent()
    }, []);


    return books ? (
        <Container>
            <Row className="justify-content-center text-center">
                <Title title={t('books.mainTitle')}/>
                <Col className="pb-2 pt-4">
                    <Table hover className="table-secondary">
                        <thead>
                        <tr>
                            <th className="w-25">{t('books.image')}</th>
                            <th>{t('books.title')}</th>
                            <th>{t('books.date')}</th>
                            <th>{t('books.available')}</th>
                        </tr>
                        </thead>
                        <BookTableList books={books.results} startIndex={startIndex} endIndex={endIndex}/>
                    </Table>
                </Col>
                <TablePagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalPages={Math.ceil(books.results.length / itemsPerPage)}
                    handlePageChange={handlePageChange}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPageOptions={ITEMS_PER_PAGE}
                />
            </Row>
        </Container>
    ) : null;
}
export default BooksMainPage;
