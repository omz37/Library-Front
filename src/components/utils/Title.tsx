import * as React from 'react';

interface TitleProps {
    title: string;
}

/**
 * Composant Title : Ce composant renvoie un titre.
 * @param TitleProps
 * @returns {JSX.Element} - renvoie un titre.
 */
export const Title: React.FC<TitleProps> = ({title}): JSX.Element => <h1 className="text-secondary py-2">{title}</h1>

export default Title;
