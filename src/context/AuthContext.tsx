import {Context, createContext} from "react";
import {AuthContext} from "../interfaces/User.interface";

export const authContext : Context<AuthContext> = createContext<AuthContext | undefined>(undefined);
