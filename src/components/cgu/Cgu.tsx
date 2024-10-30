import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {EditorialCgu} from "../../interfaces/Editorial.interface";
import {getCguContent} from "../../services/EditorialContentService";
import {Row} from "react-bootstrap";
import Title from "../utils/Title";
import ArticlesList from "../editoUtils/ArticlesList";

/**
 * Composant Cgu : Ce composant représente les CGUS de votre application.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant les CGU.
 */
const Cgu: FC = (): JSX.Element => {
    const [cgu, setCgu]: [undefined | EditorialCgu, Dispatch<SetStateAction<void | EditorialCgu>>] = useState<EditorialCgu | undefined>();
    const setHomeContentOnMount = async (): Promise<void | EditorialCgu> => {
        setCgu(await getCguContent());
    };

    useEffect(() => {
        setHomeContentOnMount()
    }, []);

    return cgu ? (
        <div>
            <Row className="text-start">
                <Title title={cgu.title} />
                <ArticlesList cgu={cgu.articles} />
            </Row>
        </div>
    ) : null;
}
export default Cgu;
