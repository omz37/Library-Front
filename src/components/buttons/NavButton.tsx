import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import * as React from "react";
import {FC} from "react";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {FooterLinkProps} from "../../interfaces/Route.interface";

/**
 * Composant NavButton : Ce composant représente un bouton custom avec un lien vers une route.
 * @returns JSX.Element
 */
export const NavButton: FC<FooterLinkProps> = ({ to, labelKey }) => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();

    return (
        <Col xs={4} md={2} lg={2}>
            <Link to={to}>
                <Button className="w-75">{t(labelKey)}</Button>
            </Link>
        </Col>
    );
};