import * as React from 'react';
import {FC} from "react";
import {Row} from "react-bootstrap";
import {
    CguRouteConstant,
    RulesRouteConstant,
    ScheduleRouteConstant
} from "../../constants/RoutesConstants";
import {NavButton} from "../buttons/NavButton";


/**
 * Composant Footer : Ce composant représente le pied de page de votre application.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant le pied de page.
 */
const Footer: FC = (): JSX.Element => {
    return (
        <Row className="bg-secondary fixed-bottom pb-2 pt-2 justify-content-center">
            <NavButton to={CguRouteConstant.path} labelKey="footer.cgu"></NavButton>
            <NavButton to={RulesRouteConstant.path} labelKey="footer.rules"></NavButton>
            <NavButton to={ScheduleRouteConstant.path} labelKey="footer.schedule"></NavButton>
        </Row>
    );
}
export default Footer;
