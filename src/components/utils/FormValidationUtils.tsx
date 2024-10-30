import 'react-toastify/dist/ReactToastify.css';
import './Toaster.scss'
import {EMAIL_FORMAT, PASSWORD_FORMAT} from "../../constants/ValidationConstant";
import {UserData} from "../../interfaces/User.interface";
import {FormErrors} from "../../interfaces/Error.interface";
import {TFunction} from "i18next";

/**
 * Vérifie si le form contient des erreurs
 *
 * @returns {boolean}
 */
export const formHasErrors = (errors: FormErrors): boolean => {
    for (const value of Object.values(errors)) {
        if (value?.length > 0) {
            return true
        }
    }
    return false;
};

/**
 * Vérifie la taille d'une string
 */
const checkLength = (str: string, max: number, min: number): boolean =>
    str.length >= min && str.length <= max;

/**
 * Vérifie la validité et la taille du mot de passe
 */
const checkPassword = (password: string): string => {
    let error: string = ""
    if (!PASSWORD_FORMAT.test(password) ) {
        error = 'createPage.errorPassword'
    }
    if (!checkLength(password, 15, 8)) {
        error = 'createPage.errorPasswordLength'
    }
    return error
}

/**
 * Vérifie la validité du formulaire et de chacun des éléments
 */
export const validateRegisterForm = (userData: UserData, confirmPassword: string, t: TFunction<"translation", undefined>): FormErrors => (
    {
        name: !checkLength(userData?.name, 64, 3) ? t('createPage.errorNameLength') : "",
        familyName: !checkLength(userData?.familyName, 64, 3) ? t('createPage.errorNameLength') : "",
        password:  t(checkPassword(userData?.password)),
        confirmPassword: userData?.password !== confirmPassword ? t('createPage.errorConfirmPassword') : "",
        email: !EMAIL_FORMAT.test(userData.email) ? t('createPage.errorEmail') : "",
    });