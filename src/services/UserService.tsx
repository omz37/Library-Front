import {AxiosResponse} from 'axios'
import axiosInstance from "../api/AxiosInstance";
import {AllUsers, EditUserBody, UserData, UserLoginResponse} from "../interfaces/User.interface";
import {showToast} from "../components/utils/UtilsToaster";
import {t} from "i18next";
import {RentsResponse} from "../interfaces/Rent.interface";


/**
 * Fonction pour effectuer la connexion de l'utilisateur en utilisant l'e-mail et le mot de passe.
 *
 * @param {string} email - L'e-mail de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<UserLoginResponse | void>} - Une promesse qui résout en UserLoginResponse ou void en cas d'erreur.
 */
export const userLogin = (email: string, password: string): Promise<UserLoginResponse | void> => {

    return axiosInstance.post('/login_check',
        {
            email: email,
            password: password
        })
        .then(({data}: AxiosResponse): UserLoginResponse => {
            return {
                token: data.token,
                user: data.user
            }
        }, (error): void => {
            showToast(t('loginPage.errorLoginCredentials'), true)
        });
}

/**
 * Fonction pour effectuer la connexion de l'utilisateur en utilisant l'e-mail et le mot de passe.
 *
 * @returns {Promise< void>} - Une promesse qui résout en UserLoginResponse ou void en cas d'erreur.
 */
export const createUser = (body: UserData): Promise<void> => {

    return axiosInstance.post('/users/register', body)
        .then((): void => {
            return
        }, (error): void => {
            throw error
        });
}

/**
 * Fonction pour obtenir les prêts d'un utilisateur.
 *
 * @returns {Promise<RentsResponse | void>} - Une promesse qui résout en RentsResponse ou void en cas d'erreur.
 * @param id
 */
export const getUserRents = (id: number): Promise<RentsResponse | void> => {

    return axiosInstance.get(`/users/${id}/rents`, {})
        .then(({data}: AxiosResponse): RentsResponse => {
            return {rents: data.rents}
        }, (error): void => {
            showToast(error, true)
        });
}

/**
 * Fonction pour modifier le profil d'un utilisateur.
 *
 * @returns {Promise<RentsResponse | void>} - Une promesse qui résout en RentsResponse ou void en cas d'erreur.
 * @param id
 * @param body
 */
export const editUserProfile = (id: number, body: EditUserBody): Promise<void> => {

    return axiosInstance.put(`/users/${id}`, body)
        .then((response: AxiosResponse): void => {
            return
        },(error): void => {
            throw error
        });
}

/**
 * Fonction pour obtenir les utilisateurs.
 *
 * @returns {Promise<AllUsers | void>} - Une promesse qui résout en AllUsers ou void en cas d'erreur.
 */
export const getAllUsers = (): Promise<AllUsers | void> => {

    return axiosInstance.get(`/users/`, {})
        .then(({data}: AxiosResponse): AllUsers => {
            return {
                total: data.total,
                users: data.users
            }
        }, (error): void => {
            showToast(error, true)
        });
}

/**
 * Fonction pour obtenir les utilisateurs avec un filtre.
 *
 * @param searchText
 *
 * @returns {Promise<AllUsers | void>} - Une promesse qui résout en Users ou void en cas d'erreur.
 */
export const getUsersByFilter = (searchText: string): Promise<AllUsers | void> => {

    return axiosInstance.get(`/users/`, {params: {name: searchText, familyName: searchText, email: searchText}})
        .then(({data}: AxiosResponse): AllUsers => {
            return {
                total: data.total,
                users: data.users
            }
        }, (error): void => {
            showToast(error, true)
        });
}