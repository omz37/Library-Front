import * as React from 'react';

interface SubtitleProps {
    subTitle: string;
}

/**
 * Composant Subtitle : Ce composant renvoie un sous titre.
 * @param SubtitleProps
 * @returns {JSX.Element} - renvoie un sous titre.
 */
const Subtitle: React.FC<SubtitleProps> = ({subTitle}): JSX.Element => <h4 className="py-3">{subTitle}</h4>

export default Subtitle;
