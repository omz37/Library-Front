import * as React from 'react';
import {Dispatch, FC, SetStateAction, useState} from 'react';
import './Login.scss';
import '../../services/UserService';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {UserData} from "../../interfaces/User.interface";
import {NavigateFunction, useNavigate} from 'react-router';
import {useTranslation, UseTranslationResponse} from 'react-i18next';
import {showToast} from "../utils/UtilsToaster";
import FormList from "../utils/FormList";
import {FormGroupProps} from "../utils/FormGroup";
import {FormErrors} from "../../interfaces/Error.interface";
import {formHasErrors, validateRegisterForm} from "../utils/FormValidationUtils";
import {createUser} from "../../services/UserService";
import {LoginRouteConstant} from "../../constants/RoutesConstants";

/**
 * Composant Login : Ce composant représente la page de connexion.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant la page de connexion.
 */
const CreateAccount: FC = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const [userData, setUserData]: [UserData, Dispatch<SetStateAction<UserData>>] = useState({name: "", familyName: "", email: "", password: ""});
    const [errorState, setErrorState]: [FormErrors, Dispatch<SetStateAction<FormErrors>>] = useState({name: "", familyName: "", email: "", password: "", confirmPassword: ""});
    const [confirmPassword, setConfirmPassword]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const formGroups: FormGroupProps[] = [
        {
            label: t('createPage.name'),
            type: "text",
            name: "name",
            value: userData.name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, name: e.target.value}),
            placeholder: t('createPage.name'),
            error: errorState?.name
        },
        {
            label: t('createPage.family'),
            type: "text",
            name: "familyName",
            value: userData.familyName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, familyName: e.target.value}),
            placeholder: t('createPage.family'),
            error: errorState?.familyName
        },
        {
            label: t('createPage.email'),
            type: "email",
            name: "email",
            value: userData.email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, email: e.target.value}),
            placeholder: t('createPage.email'),
            error: errorState?.email
        },
        {
            label: t('createPage.password'),
            type: "password",
            name: "password",
            value: userData.password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, password: e.target.value}),
            placeholder: t('createPage.password'),
            error: errorState?.password
        },
        {
            label: t('createPage.confirmPassword'),
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value),
            placeholder: t('createPage.confirmPassword'),
            error: errorState?.confirmPassword
        },
    ];

    /**
     * Créér un utilisateur si il n'y a pas d'erreurs, si il y en a les affichent
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const errors: FormErrors= validateRegisterForm(userData, confirmPassword, t)

        if (formHasErrors(errors)) {
            event.stopPropagation();
            setErrorState(errors)
            return;
        }

        try {
            await createUser(userData)
        } catch (error) {
            showToast(t('createPage.errorUnique'), true)
            return;
        }

        showToast(t('createPage.success'), false);
        navigate(LoginRouteConstant.path);
    };

    return (
        <div className="login align-content-center text-center pb-5">
            <Container>
                <Row>
                    <h2 className="text-primary fw-bold">{t('createPage.title')}</h2>
                </Row>
                <Row className="justify-content-center">
                    <Card className="w-75 bg-secondary pb-5">
                        <Row className="justify-content-center mt-5">
                            <Form className="text-start pt-5 w-75" noValidate
                                  onSubmit={handleSubmit}>
                                <Form.Label className="fst-italic"
                                            style={{color: 'antiquewhite'}}>{t('createPage.subTitle')}</Form.Label>

                                <FormList formGroups={formGroups} />

                                <Row className="pt-5">
                                    <Col className="col-8">
                                        <Button variant='primary' type="submit"> {t('createPage.submitBtn')}</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

export default CreateAccount;
