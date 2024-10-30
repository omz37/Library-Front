import * as React from 'react';
import {Rent} from "../../interfaces/Rent.interface";
import {Col, Image} from "react-bootstrap";

export interface RentsListItemProps {
    rent: Rent,
    key: number
}

/**
 * Composant RentsListItem : Ce composant renvoie un prêt
 * @returns JSX.Element
 */
export const RentsListItem: React.FC<RentsListItemProps> = ({rent, key}): JSX.Element => {
    return (
        <Col key={key}>
            <p className="fw-bold">{rent.bookDTO.title}</p>
            <p className="fst-italic">{rent.bookDTO.author}</p>
            <Image className="w-25" src={rent.bookDTO.image.url}/>
        </Col>
    )
}