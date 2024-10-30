import * as React from 'react';
import '../../services/UserService';
import {Col, Image, Row} from "react-bootstrap";
import {Dispatch, FC, SetStateAction, useEffect, useState,} from "react";
import {getIntroContent} from "../../services/EditorialContentService";
import {EditorialIntro} from "../../interfaces/Editorial.interface";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";
import {NavButton} from "../buttons/NavButton";
import {useTranslation, UseTranslationResponse} from "react-i18next";

/**
 * Composant Home : Ce composant représente la page d'accueil de l'application.
 *
 * @returns {JSX.Element | null} - Renvoie un élément JSX représentant la page d'accueil ou null si l'utilisateur n'est pas connecté.
 */
const Home: FC = (): JSX.Element => {
    const [intro, setIntro]: [undefined | EditorialIntro, Dispatch<SetStateAction<void | EditorialIntro>>] = useState<EditorialIntro | undefined>();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const setHomeContentOnMount = async (): Promise<void | EditorialIntro> => {
        setIntro(await getIntroContent());
    };

    useEffect(() => {
        setHomeContentOnMount()
    }, []);

    return intro ? (
        <div>
            <Row className="text-start">
                <Row>
                    <Title title={intro.introTitle} />
                </Row>

                <Row className="justify-content-center">
                    <Col className="text-primary col-8">
                        {intro.introText}
                    </Col>

                    <Col className="text-primary col-4 justify-content-center">
                        <Image src={intro.introImage.url} className="w-100" />
                        <Subtitle subTitle={intro.introSubtitle} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="col-1">
                        <Title title={"=>"} />
                    </Col>
                    <Col className="col-8">
                        <NavButton to="/categories" labelKey={t("btn.collection")}/>
                    </Col>
                </Row>
            </Row>
        </div>
    ) : null;
}

export default Home;
