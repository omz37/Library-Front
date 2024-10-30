import {Col, Navbar} from "react-bootstrap";
import * as React from "react";
import {FC, useContext} from "react";
import {
    AccountRouteConstant,
    AdminRouteConstant,
    CategoryRouteConstant,
    HomeRouteConstant
} from "../../constants/RoutesConstants";
import {useTranslation} from "react-i18next";
import {HeaderButton} from "../buttons/HeaderButton";
import {AuthContext} from "../../interfaces/User.interface";
import {authContext} from "../../context/AuthContext";

/**
 * Composant Headrer : Ce composant représente le haut de page de votre application.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant le haut de page.
 */
const Header: FC = (): JSX.Element => {
    const {t} = useTranslation();
    const {user}: AuthContext = useContext<AuthContext>(authContext);
    return (
        <div>
            <Navbar bg="secondary" className="py-3 ps-5">
                <HeaderButton to={AdminRouteConstant.path} title={t("header.admin")} img={"admin.png"} disabled={!user?.roles.includes("ROLE_ADMIN")}/>
                <Col className="col-8"/>
                <HeaderButton to={HomeRouteConstant.path} title={t("header.home")} img={"home.png"} disabled={false} />
                <HeaderButton to={CategoryRouteConstant.path} title={t("header.ourBooks")} img={"book.png"} disabled={!user} />
                <HeaderButton to={AccountRouteConstant.path} title={t("header.account")} img={"profile.png"} disabled={false} />
            </Navbar>
        </div>
    );
}
export default Header;
