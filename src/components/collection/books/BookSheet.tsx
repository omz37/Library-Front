import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Card, CardText, CardTitle, Col, Container, Image, Row} from "react-bootstrap";
import {Book, BookFilters, BookList} from "../../../interfaces/Book.interface";
import {getBooksBy} from "../../../services/BookService";
import {useLocation, useParams} from "react-router";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {FILTER_TYPE_ID, INITIAL_PAGE, INITIAL_PAGE_SIZE} from "../../../constants/PaginationConstants";
import {showToast} from "../../utils/UtilsToaster";
import Subtitle from "../../utils/Subtitle";
import RentButton from "../RentButton";
import {Params} from "react-router-dom";

/**
 * Composant BookSheet : Ce composant représente la fiche d'un livre
 *
 * @returns {JSX.Element} - Renvoie un élément JSX
 */
const BookSheet: FC = (): JSX.Element => {
    const [book, setBook]: [undefined | Book, Dispatch<SetStateAction<void | Book>>] = useState<Book | undefined>();
    const { bookId }: Readonly<Params> = useParams();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const filters: BookFilters  = {
        type: FILTER_TYPE_ID,
        value: bookId,
        page: INITIAL_PAGE,
        pageSize: INITIAL_PAGE_SIZE
    }

    /**
     * Permets de récupérer le livre dans l'Api
     */
    const setBookContent = async (): Promise<void> => {
        try {
            const bookList: void | BookList = await getBooksBy(filters)
            if (!bookList || bookList?.results?.length === 0) {
                setBook(null)
                showToast(t("books.bookNotFound"), true)
                return
            }
            setBook(bookList.results[0])
        } catch (error) {
            showToast(t("books.bookError"), true)
        }
    };

    useEffect(() => {
        setBookContent()
    }, []);

    return book ? (
        <Container className="justify-content-center text-center text-white pb-5">
            <Card className="bg-secondary ">
                <CardTitle className="pt-5"><h1>{book.title}</h1></CardTitle>
                <Subtitle subTitle={`${book.author} - ${book.publishDate}`}/>
                <Row className="align-items-center px-5 py-5">
                    <Col className="col-5">
                        <Image src={book.image.url}/>
                    </Col>
                    <Col className="col-5">
                        <CardText className="text-start">
                            {book.summary}
                        </CardText>
                    </Col>
                </Row>
                <Row className="pb-5 justify-content-center">
                    <Col className="col-4">
                        <RentButton book={book} />
                    </Col>
                </Row>
            </Card>
        </Container>
    ) : null;
}
export default BookSheet;
