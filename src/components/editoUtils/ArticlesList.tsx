import * as React from 'react';
import {Article, Day, Rule} from "../../interfaces/Editorial.interface";
import ArticleText from "./ArticleText";

interface ArticlesListProps {
    rules?: Rule[]
    cgu?: Article[]
    schedule?: Day[]
}

/**
 * Composant ArticlesList : Ce composant renvoie une liste d'articles.
 * @param ArticlesListProps
 * @returns {JSX.Element} - renvoie une liste d'articles.
 */
const ArticlesList: React.FC<ArticlesListProps> = ({rules, cgu, schedule}): JSX.Element => {
    return (
        <div>
            {rules && (
                <div>
                    {rules.map((article: Rule, index: number) => (
                        <ArticleText key={index} title={article.rulearticletitle} text={article.rulearticletext}/>
                    ))}
                </div>
            )}

            {cgu && (
                <div>
                    {cgu.map((cgu: Article, index: number) => (
                        <ArticleText key={index} title={cgu.articletitle} text={cgu.articletext}/>
                    ))}
                </div>
            )}

            {schedule && (
                <div>
                    {schedule.map((day: Day, index: number) => (
                        <ArticleText key={index} title={day.daytitle} text={`${day.openingtime} - ${day.closingtime}`}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticlesList;