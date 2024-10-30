import * as React from 'react';
import {Button} from 'react-bootstrap';
import {Book} from "../../interfaces/Book.interface";
import {FC, useContext, useState} from "react";
import {showToast} from "../utils/UtilsToaster";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {AuthContext} from "../../interfaces/User.interface";
import {authContext} from "../../context/AuthContext";
import {rentBook} from "../../services/RentService";

interface RentButtonProps {
    book: Book
}

/**
 * Composant NavButton : Ce composant représente un bouton qui permet d'emrpunter un livre.
 * @returns JSX.Element
 */
export const RentButton: FC<RentButtonProps> = ({book}) => {
    const [isBookRented, setIsBookRented]: [boolean,  React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(book.isRented);
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const {user}: AuthContext = useContext<AuthContext>(authContext);

    /**
     * Permets de louer un livre si l'utilisateur a les bons droits et que le livre est disponible
     * */
    const handleRent = async (): Promise<void> => {
        if (isBookRented) {
            showToast("Hop hop hop", true)
            return
        }
        try {
            await rentBook({userID: user.id, bookID: book.id})
            setIsBookRented(true)
            showToast(t("rent.success"), false)
        } catch (error) {
            showToast(t("rent.unauthorized"), true)
        }
    };

    return (
        <Button className={isBookRented ? "bg-danger" : "bg-primary"} disabled={isBookRented} onClick={handleRent}>
            {t(`btn.rent.${isBookRented}`)}
        </Button>
    );
};

export default RentButton;