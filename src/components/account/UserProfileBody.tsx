import * as React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import Subtitle from '../utils/Subtitle';
import RentsList from './RentsList';
import {User} from "../../interfaces/User.interface";
import {RentsResponse} from "../../interfaces/Rent.interface";
import {useTranslation, UseTranslationResponse} from "react-i18next";

interface UserProfileBodyProps {
    user: User;
    email: string;
    rents: RentsResponse | undefined;
    handleEdit: () => void;
    handleDisconnect: () => void;
}

const UserProfileBody: React.FC<UserProfileBodyProps> = ({
                                                             user,
                                                             email,
                                                             rents,
                                                             handleEdit,
                                                             handleDisconnect,
                                                         }) => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    return (
        <Card.Body className=" pt-5">
            <Subtitle subTitle={t("account.name") + user.name}/>
            <Subtitle subTitle={t("account.familyName") + user.familyName}/>
            <Subtitle subTitle={t("account.email") + email}/>
            <Subtitle subTitle={t("account.id") + user.id}/>
            <Row className="justify-content-center pt-2 pb-5">
                <Col className="col-2">
                    <Button className="bg-secondary" onClick={handleEdit}>
                        {t("account.edit")}
                    </Button>
                </Col>
                <Col className="col-2">
                    <Button className="bg-danger" onClick={handleDisconnect}>
                        {t("account.logout")}
                    </Button>
                </Col>
            </Row>
            {rents && rents.rents.length !== 0 && (
                <RentsList rents={rents.rents} title={t("account.rents")} />
            )}
        </Card.Body>
    );
};

export default UserProfileBody;