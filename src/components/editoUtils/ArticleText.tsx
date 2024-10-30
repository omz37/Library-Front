import * as React from 'react';
import {FC} from "react";

interface ArticleTextProps {
    title: string,
    text: string
}

/**
 * Composant ArticleText : Ce composant renvoie le titre te le texte de chaque article.
 * @param ArticleTextProps
 * @returns {JSX.Element} - renvoie le titre te le texte de chaque article.
 */
const ArticleText: FC<ArticleTextProps> = ({title, text}): JSX.Element => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default ArticleText;