import * as React from 'react';
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {EditorialRules, EditorialSchedule} from "../../interfaces/Editorial.interface";
import {getScheduleContent} from "../../services/EditorialContentService";
import Title from "../utils/Title";
import ArticlesList from "../editoUtils/ArticlesList";

/**
 * Composant Schedule : Ce composant représente les horaires de la bibliothèque.
 *
 * @returns {JSX.Element} - Renvoie un élément JSX représentant les horaires.
 */
const Schedule: FC = (): JSX.Element => {
    const [schedule, setSchedule]: [undefined | EditorialSchedule, Dispatch<SetStateAction<void | EditorialSchedule>>] = useState<EditorialSchedule | undefined>();
    const setRulesContentOnMount = async (): Promise<void | EditorialRules> => {
        setSchedule(await getScheduleContent());
    };

    useEffect(() => {
        setRulesContentOnMount()
    }, []);

    return schedule ? (
        <div>
            <Row className="justify-content-center text-center">
                <Title title={schedule.scheduleTitle} />
                <ArticlesList schedule={schedule.weekSchedule} />
            </Row>
        </div>
    ) : null;
}
export default Schedule;
