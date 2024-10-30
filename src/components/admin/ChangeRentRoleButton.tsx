import * as React from 'react';
import {Button} from 'react-bootstrap';
import {FC, useState} from "react";
import {showToast} from "../utils/UtilsToaster";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {EditUserBody, User} from "../../interfaces/User.interface";
import {editUserProfile} from "../../services/UserService";
import {ROLE_RENT_ALLOWED} from "../../constants/UserConstants";

interface VerifyAccountButtonProps {
    user: User
}

/**
 * Composant ChangeRentRoleButton : Ce composant représente un bouton qui permet d'emprunter un livre.
 * @returns JSX.Element
 */
export const ChangeRentRoleButton: FC<VerifyAccountButtonProps> = ({user}) => {
    const [isUserVerified, setIsUserVerified]: [boolean,  React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(user?.roles?.includes(ROLE_RENT_ALLOWED) ?? false);
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();

    /**
     * Permets d'accorder le role peut emprunter a un utilisateur/ ou de lui enlever
     * */
    const handleChange = async (): Promise<void> => {
        let editBody: EditUserBody = {
            "name": user.name,
            "familyName": user.familyName,
            "email": user.email,
            "roles": [""]
        }
        try {
            if (!isUserVerified) {
               editBody = {...editBody, roles: [ROLE_RENT_ALLOWED]}
            }
            await editUserProfile(user.id, editBody)
            setIsUserVerified(!isUserVerified)
            showToast(t("admin.editSuccess"), false)
        } catch (error) {
            showToast(t("admin.editError"), true)
        }
    };

    return (
        <Button className={isUserVerified ? "bg-danger" : "bg-primary"} onClick={handleChange}>
            {t(`btn.status.${isUserVerified}`)}
        </Button>
    );
};

export default ChangeRentRoleButton;