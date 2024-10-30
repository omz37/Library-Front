import * as React from 'react';
import './Login.scss';
import '../../services/UserService';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {userLogin} from "../../services/UserService";
import {Dispatch, FC, SetStateAction, useContext, useState} from "react";
import {authContext} from "../../context/AuthContext";
import {AuthContext, UserLoginResponse} from "../../interfaces/User.interface";
import {NavigateFunction, useNavigate} from 'react-router';
import {useTranslation, UseTranslationResponse} from 'react-i18next';
import {showToast} from "../utils/UtilsToaster";
import {CreateAccountConstant, HomeRouteConstant} from "../../constants/RoutesConstants";
import {FormGroupProps} from "../utils/FormGroup";
import {Link} from "react-router-dom";
import FormList from "../utils/FormList";

/**
 * Composant Login : Ce composant représente la page de connexion.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant la page de connexion.
 */
const Login: FC = (): JSX.Element => {
    const [validated, setValidated]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const {login} = useContext<AuthContext>(authContext);
    const navigate: NavigateFunction = useNavigate();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const formGroups: FormGroupProps[] = [
            {
                label: t('loginPage.emailLabel'),
                type: "email",
                name: "email",
                placeholder: t('loginPage.emailLabel')
            },
            {
                label: t('loginPage.passwordLabel'),
                type: "password",
                name: "password",
                placeholder: t('loginPage.passwordLabel')
            },
        ]
    ;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (event.currentTarget.checkValidity() === false) {
            showToast(t('loginPage.errorLoginForm'), true);
            event.stopPropagation();
            return;
        }

        setValidated(true);
        const email: string = event.currentTarget.email.value;
        const password: string = event.currentTarget.password.value;
        const response: UserLoginResponse | void = await userLogin(email, password);

        if (!response) {
            return
        }

        showToast(t('loginPage.successLogin'), false);
        login(response.token, response.user);
        navigate(HomeRouteConstant.path);
    };

    return (
        <div className="login align-content-center text-center">
            <Container>
                <Row>
                    <h2 className="text-primary fw-bold">{t('loginPage.title')}</h2>
                </Row>
                <Row className="justify-content-center">
                    <Card className="w-75 bg-secondary pb-5">
                        <Row className="justify-content-center mt-5">
                            <Form className="text-start pt-5 w-75" noValidate validated={validated}
                                  onSubmit={handleSubmit}>
                                <Form.Label className="fst-italic"
                                            style={{color: 'antiquewhite'}}>{t('loginPage.subTitle')}
                                </Form.Label>

                                <FormList formGroups={formGroups} />

                                <Row className="pt-5">
                                    <Col className="col-8">
                                        <Button variant='primary' type="submit"> {t('loginPage.loginBtn')}</Button>
                                    </Col>
                                    <Col className="col-4 text-end">
                                        <Link to={CreateAccountConstant.path}>
                                            <Button variant='primary'> {t('loginPage.createBtn')} </Button>
                                        </Link>
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

export default Login;
