import * as React from 'react';
import FormGroup, {FormGroupProps} from "./FormGroup";

interface FormGroupList {
    formGroups: FormGroupProps[],
}

/**
 * Composant Custom FormList : Ce composant renvoie une liste de FormGroup.
 * @returns {JSX.Element}
 */
const FormList: React.FC<FormGroupList> = ({formGroups}): JSX.Element => {
    return (
        <div>
            {formGroups.map((group:FormGroupProps, index: number) => (
                <FormGroup
                    key={index}
                    label={group.label}
                    type={group.type}
                    name={group.name}
                    value={group.value}
                    onChange={group.onChange}
                    placeholder={group.placeholder}
                    error={group.error}
                />
            ))}
        </div>
    );
};
export default FormList;
