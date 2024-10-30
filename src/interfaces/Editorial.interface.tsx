import {ImageInterface} from "./Image.interface";

export interface EditorialIntro {
    introTitle: string,
    introSubtitle: string,
    introText: string,
    introImage: ImageInterface
}

export interface Article {
    articletitle: string,
    articletext: string
}

export interface EditorialCgu {
    title: string,
    articles: Array<Article>,
}

export interface Rule {
    rulearticletitle: string,
    rulearticletext: string
}

export interface EditorialRules {
    rulesTitle: string,
    rulesSubtitle: string,
    rulesArticles: Array<Rule>,
}

export interface Day {
    daytitle: string,
    openingtime: string,
    closingtime: string
}

export interface EditorialSchedule {
    scheduleTitle: string,
    weekSchedule: Array<Day>,
}
