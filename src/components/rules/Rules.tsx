import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {EditorialRules} from "../../interfaces/Editorial.interface";
import {getRulesContent} from "../../services/EditorialContentService";
import {Row} from "react-bootstrap";
import ArticlesList from "../editoUtils/ArticlesList";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";

/**
 * Composant Rules : Ce composant représente le règlement de votre bibliothèque.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant le règlement.
 */
const Rules: FC = (): JSX.Element => {
    const [rules, setRules]: [undefined | EditorialRules, Dispatch<SetStateAction<void | EditorialRules>>] = useState<EditorialRules | undefined>();
    const setRulesContentOnMount = async (): Promise<void | EditorialRules> => {
        setRules(await getRulesContent());
    };

    useEffect(() => {
        setRulesContentOnMount()
    }, []);

    return rules ? (
        <div>
            <Row className="text-start">
                <Title title={rules.rulesTitle} />
                <Subtitle subTitle={rules.rulesSubtitle} />
                <ArticlesList rules={rules.rulesArticles} />
            </Row>
        </div>
    ) : null;
}
export default Rules;
