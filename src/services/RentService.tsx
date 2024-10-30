import axiosInstance from "../api/AxiosInstance";
import {AxiosResponse} from "axios";
import {Rent, rentRequestBody} from "../interfaces/Rent.interface";


/**
 * Fonction pour effectuer la récupération des emprunts.
 *
 * @returns {Promise<Rent[] | void>}
 */
export const getRents = (): Promise<Rent[]|void> =>
    axiosInstance.get<Rent[]>('/rents/', {})
        .then(({data}: AxiosResponse<Rent[]>): Rent[] => {
            return data;
        },(error): void => {});



/**
 * Fonction pour effectuer un emprunt.
 *
 * @returns {Promise<void>}
 */
export const rentBook = (body: rentRequestBody): Promise<void> => {

    return axiosInstance.post(`/rents/`, body)
        .then((response: AxiosResponse): void => {
            return
        },(error): void => {
            throw error
        });
}
