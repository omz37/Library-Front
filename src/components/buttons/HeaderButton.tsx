import {Button, Col, Image} from "react-bootstrap";
import * as React from "react";
import {FC} from "react";
import {NavigateFunction, useNavigate} from "react-router";

interface HeaderProps {
    to: string,
    title: string,
    img: string,
    disabled: boolean

}

/**
 * Composant NavButton : Ce composant représente un bouton custom avec un lien vers une route.
 * @returns JSX.Element
 */
export const HeaderButton: FC<HeaderProps> = ({to, title, img, disabled}) => {
    const navigate: NavigateFunction = useNavigate();
    const handleHeaderClick = () => {
        navigate(to)
    }

    return (
        <Col>
            <Button className="w-50" title={title} disabled={disabled} onClick={handleHeaderClick}>
                <Image className="w-50" src={img}/>
            </Button>
        </Col>
    );
};