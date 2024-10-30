import * as React from 'react';
import {FC} from "react";
import {Card, Col} from "react-bootstrap";
import {BookCategory} from "../../../interfaces/Book.interface";
import Subtitle from "../../utils/Subtitle";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {useNavigate} from "react-router";

interface CategoryListItemProp {
    category: BookCategory
}

/**
 * Composant categpory : Ce composant représente la liste des catégories de ivres disponibles
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant la liste des catégories.
 */
const CategoryListItem: FC<CategoryListItemProp> = ({category}): JSX.Element => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const navigate = useNavigate();
    const handleCategoryClick = (): void => {
        navigate(`/category/${category.id}`);
    };

    return (
        <Col className="col-6 py-3 justify-content-center text-center">
            <Card className="bg-primary py-5 text-white clickable-card" onClick={handleCategoryClick}>
                <Subtitle subTitle={t(`category.${category.title}`)} />
            </Card>
        </Col>
    );
}
export default CategoryListItem;