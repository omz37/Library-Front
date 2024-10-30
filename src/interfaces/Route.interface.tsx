import {FC} from "react";

export interface RouteInterface {
    label: string,
    path: string,
    component: FC,
    isPrivate: boolean
}

export interface FooterLinkProps {
    to: string;
    labelKey: string;
}
