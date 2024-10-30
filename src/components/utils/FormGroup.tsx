import * as React from 'react';
import {Alert, Form} from "react-bootstrap";

export interface FormGroupProps {
    label: string,
    type: string,
    value?: string,
    name: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    error?: string
}

/**
 * Composant Custom FormGroup : Ce composant renvoie un emplacement de texte modifiable.
 * @returns {JSX.Element}
 */
const FormGroup: React.FC<FormGroupProps> = ({
                                                 label,
                                                 type,
                                                 value,
                                                 name,
                                                 onChange,
                                                 placeholder,
                                                 error
                                             }: FormGroupProps): JSX.Element => {
    return (
        <Form.Group className="py-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error?.length > 0 && (
                <Alert variant={"danger"} className="fst-italic alert-box">{error}</Alert>
            )}
        </Form.Group>
    );
};

export default FormGroup;