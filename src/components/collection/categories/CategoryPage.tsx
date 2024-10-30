import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {EditorialIntro} from "../../../interfaces/Editorial.interface";
import {BookCategoryList} from "../../../interfaces/Book.interface";
import {getCategories} from "../../../services/BookService";
import CategoryList from "./CategoryList";


/**
 * Composant categpory : Ce composant représente la liste des catégories de ivres disponibles
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant la liste des catégories.
 */
const CategoryPage: FC = (): JSX.Element => {
    const [categories, setCategories]: [undefined | BookCategoryList, Dispatch<SetStateAction<void | BookCategoryList>>] = useState<BookCategoryList | undefined>();
    const setCategoriesContent = async (): Promise<void | EditorialIntro> => {
        setCategories(await getCategories());
    };

    useEffect(() => {
        setCategoriesContent()
    }, []);

    return categories ? (
        <Container className="text-white">
            <Row className="text-start">
                <CategoryList categories={categories.results}/>
            </Row>
        </Container>
    ) : null;
}
export default CategoryPage;
