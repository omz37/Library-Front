import './App.scss';
import * as React from 'react';
import {ToastContainer} from 'react-toastify';
import Header from "./components/header/Header";
import {Dispatch, FC, useState} from "react";
import {authContext} from './context/AuthContext';
import {AuthContext, User} from "./interfaces/User.interface";
import { AppRoutes, LoginRouteConstant} from "./constants/RoutesConstants";
import {RouteInterface} from "./interfaces/Route.interface";
import {Navigate, Route, Routes} from "react-router";
import Footer from "./components/footer/Footer";
import {Row} from "react-bootstrap";
import {TOKEN} from "./constants/UserConstants";

const App: FC = (): JSX.Element => {
    const [authData, setAuthData]: [AuthContext, Dispatch<AuthContext>] = useState<AuthContext>({
        token: null,
        user: null,
        login: (token: string, user: User): void => {
            setAuthData({...authData, token, user});
            localStorage.setItem(TOKEN, token);
        },
        logout: (): void => {
            setAuthData({...authData, token: null, user: null});
            localStorage.removeItem(TOKEN);
        },
    });
    return (
        <authContext.Provider value={authData}>
            <div className="app font-monospace">
                <Row>
                    <Header />
                    <Routes>
                        {AppRoutes.map((route: RouteInterface) => (
                            <Route key={route.label} path={route.path}
                                   element={
                                       route.isPrivate && !authData.user ? (
                                           /**
                                            * Redirige vers /login si la route est privée et que l'utilisateur n'est pas authentifié
                                            */
                                           <Navigate to={LoginRouteConstant.path}/>
                                       ) : (
                                           /**
                                            * Affiche le composant de la route s'il n'est pas privé ou si l'utilisateur est authentifié
                                            */
                                           <div className="py-5 px-5">
                                               <route.component />
                                           </div>
                                       )
                                   }
                            />
                        ))}
                    </Routes>
                    <Footer />
                </Row>
                <ToastContainer />
            </div>
        </authContext.Provider>
    );
}
export default App;
