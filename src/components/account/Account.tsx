import * as React from 'react';
import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from "react";
import {AuthContext, EditUserBody, User} from "../../interfaces/User.interface";
import {authContext} from "../../context/AuthContext";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {editUserProfile, getUserRents} from "../../services/UserService";
import {RentsResponse} from "../../interfaces/Rent.interface";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {showToast} from "../utils/UtilsToaster";
import {TOKEN} from "../../constants/UserConstants";
import UserEditBody from "./UserEditBody";
import UserProfileBody from "./UserProfileBody";

/**
 * Composant Account : Ce composant représente le compte de votre utilisateur.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant le compte.
 */
const Account: FC = (): JSX.Element => {
    const {user, logout, login}: AuthContext = useContext<AuthContext>(authContext);
    const [rents, setRents]: [undefined | RentsResponse, Dispatch<SetStateAction<void | RentsResponse>>] = useState<RentsResponse | undefined>();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const setUserRentsContent = async (): Promise<void | RentsResponse> => {
        setRents(await getUserRents(user.id));
    };
    const [isEditMode, setIsEditMode]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean | undefined>()
    const [validated, setValidated]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [formData, setFormData]: [EditUserBody, Dispatch<SetStateAction<EditUserBody>>] = useState({
        name: user.name,
        familyName: user.familyName,
        email: user.email,
        roles: ['ROLE_USER']
    });

    useEffect(() => {
        setUserRentsContent()
    }, []);

    const handleDisconnect = (): void => {
        /** Logout l'utilisateur dans le AuthContext */
        logout()
    };

    const handleEdit = (): void => {
        /** Fais passer le profil en mode édition */
        setIsEditMode(true)
    };

    const handleCancel = (): void => {
        setIsEditMode(false)
        /** Annule les modifications et rétablis les valeurs par défaut */
        setFormData({name: user.name, familyName: user.familyName, email: user.email, roles: ['ROLE_USER']})
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (event.currentTarget.checkValidity() === false) {
            showToast(t('account.editFailed'), true)
            event.stopPropagation()
            return
        }
        try {
            setValidated(true)
            await editUserProfile(user.id, formData);
            showToast(t('account.editSuccess'), false)
            setIsEditMode(false);

            /** Mets à jour l'entité User avec les modifs
             * Ensuite Log in l'utilisateur avec l'User modifié
             */
            const updatedUser: User = {
                ...user,
                name: formData.name,
                familyName: formData.familyName,
                email: formData.email
            };
            login(localStorage.getItem(TOKEN), updatedUser);
        } catch (error) {
            showToast(t('account.editFailed'), true)
            event.stopPropagation();
        }
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, name: event.currentTarget.value});
    }

    const handleFamilyNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, familyName: event.currentTarget.value})
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, email: event.currentTarget.value})
    }

    return (
        <Container>
            <Row>
                <Card className="bg-primary text-white justify-content-center text-center py-5">
                    <Row>
                        <Col className="col-2"></Col>
                        <Col className="col-8 text-end justify-content-end">
                            <Card.Title className="text-center"><h1>{t('account.title')}</h1></Card.Title>
                        </Col>
                        <Col className="col-2">
                            <Image className="w-25" src={user.roles.includes("ROLE_RENT_ALLOWED") ? 'verifiedProfile.png' : 'x.png'}/>
                        </Col>
                    </Row>
                    {isEditMode ? (
                        <UserEditBody
                            handleSubmit={handleSubmit}
                            formData={formData}
                            handleCancel={handleCancel}
                            handleEmailChange={handleEmailChange}
                            handleFamilyNameChange={handleFamilyNameChange}
                            handleNameChange={handleNameChange}
                        />
                    ) : (
                        <UserProfileBody
                            user={user}
                            email={user.email}
                            rents={rents}
                            handleEdit={handleEdit}
                            handleDisconnect={handleDisconnect}
                        />
                    )}
                </Card>
            </Row>
        </Container>
    );
}
export default Account;
