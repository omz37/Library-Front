import * as React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import FormGroup from '../utils/FormGroup';
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {EditUserBody} from "../../interfaces/User.interface";

interface EditModeFormProps {
    formData: EditUserBody;
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFamilyNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleCancel: () => void;
}
const EditModeForm: React.FC<EditModeFormProps> = ({
                                                       formData,
                                                       handleNameChange,
                                                       handleFamilyNameChange,
                                                       handleEmailChange,
                                                       handleSubmit,
                                                       handleCancel,
                                                   }) => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    return (
        <Card.Body className="pt-5 col-8 px-5">
            <Form className="justify-content-center text-start w-75" noValidate onSubmit={handleSubmit}>
                <FormGroup
                    label={t('account.name')}
                    type="string"
                    value={formData.name}
                    name="name"
                    onChange={handleNameChange}
                />

                <FormGroup
                    label={t('account.familyName')}
                    type="string"
                    value={formData.familyName}
                    name="familyName"
                    onChange={handleFamilyNameChange}
                />

                <FormGroup
                    label={t('account.email')}
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleEmailChange}
                />

                <Row className="pt-5">
                    <Col className="col-4">
                        <Button className="bg-secondary" type="submit">{t('btn.submit')}</Button>
                    </Col>
                    <Col className="col-4">
                        <Button className="bg-danger" onClick={handleCancel}>{t('btn.cancel')}</Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    );
};

export default EditModeForm;