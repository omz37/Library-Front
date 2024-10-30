import * as React from 'react';
import {FC} from "react";
import {Row} from "react-bootstrap";
import {BookCategory} from "../../../interfaces/Book.interface";
import CategoryListItem from "./CategoryListItem";
import Title from "../../utils/Title";
import {useTranslation, UseTranslationResponse} from "react-i18next";

interface CategoryListProp {
    categories: BookCategory[]
}

/**
 * Composant categpory : Ce composant représente la liste des catégories de ivres disponibles
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant la liste des catégories.
 */
const CategoryList: FC<CategoryListProp> = ({categories}): JSX.Element => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    return (
        <Row className="text-center">
            <Title title={t("category.title")}/>
            {categories.map((category: BookCategory, key: number) => (
                <CategoryListItem category={category} key={key}/>
            ))}
        </Row>
    );
}
export default CategoryList;
