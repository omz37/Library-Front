import {AxiosResponse} from 'axios'
import axiosInstance from "../api/AxiosInstance";
import {EditorialCgu, EditorialIntro, EditorialRules, EditorialSchedule} from "../interfaces/Editorial.interface";
import {editorialBaseURL} from "../constants/RoutesConstants";

/**
 * Fonction pour effectuer la récupération du contenu d'introduction.
 *
 * @returns {Promise<EditorialIntro | void>}
 */
export const getIntroContent = (): Promise<EditorialIntro|void> =>
    axiosInstance.get<EditorialIntro>(editorialBaseURL + 'intro', {})
        .then(({data}: AxiosResponse<EditorialIntro>): EditorialIntro => {
            return {
                introTitle: data.introTitle,
                introSubtitle: data.introSubtitle,
                introText: data.introText,
                introImage: data.introImage
            };
        },(error): void => {});

/**
 * Fonction pour effectuer la récupération du contenu des cgus.
 *
 * @returns {Promise<EditorialCgu | void>}
 */
export const getCguContent = (): Promise<EditorialCgu|void> =>
    axiosInstance.get<EditorialCgu>(editorialBaseURL + 'cgu', {})
        .then(({data}: AxiosResponse<EditorialCgu>): EditorialCgu => {
            return {
                title: data.title,
                articles: data.articles,
            };
        },(error): void => {});

/**
 * Fonction pour effectuer la récupération du contenu du règlement.
 *
 * @returns {Promise<EditorialRules | void>}
 */
export const getRulesContent = (): Promise<EditorialRules|void> =>
    axiosInstance.get<EditorialRules>(editorialBaseURL + 'rules', {})
        .then(({data}: AxiosResponse<EditorialRules>): EditorialRules => {
            return {
                rulesTitle: data.rulesTitle,
                rulesSubtitle: data.rulesSubtitle,
                rulesArticles: data.rulesArticles,
            };
        },(error): void => {});

/**
 * Fonction pour effectuer la récupération du contenu des horaires.
 *
 * @returns {Promise<EditorialSchedule | void>}
 */
export const getScheduleContent = (): Promise<EditorialSchedule|void> =>
    axiosInstance.get<EditorialSchedule>(editorialBaseURL + 'schedule', {})
        .then(({data}: AxiosResponse<EditorialSchedule>): EditorialSchedule => {
            return {
                scheduleTitle: data.scheduleTitle,
                weekSchedule: data.weekSchedule,
            };
        },(error): void => {});
