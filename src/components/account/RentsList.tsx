import * as React from 'react';
import {Rent, RentsResponse} from "../../interfaces/Rent.interface";
import {CardTitle, Row} from "react-bootstrap";
import {RentsListItem} from "./RentsListItem";

export interface RentsList extends RentsResponse{
    rents: Rent[],
    title: string
}

/**
 * Composant RentsList : Ce composant renvoie une liste d'emprunts
 * @returns JSX.Element
 */
const RentsList: React.FC<RentsList> = ({rents, title}): JSX.Element => {
    return (
        <Row className="text-center justify-content-center">
            <CardTitle className="fw-bolder fst-italic py-2">
                {title}
            </CardTitle>
            <Row>
                {rents.map((rent: Rent, index: number) => (
                    <RentsListItem rent={rent} key={index}/>
                ))}
            </Row>
        </Row>
    );
};

export default RentsList;