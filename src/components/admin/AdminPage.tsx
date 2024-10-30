import * as React from 'react';
import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import '../../services/UserService';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import Title from "../utils/Title";
import {useTranslation, UseTranslationResponse} from "react-i18next";
import {AllUsers, AuthContext} from "../../interfaces/User.interface";
import {authContext} from "../../context/AuthContext";
import {getAllUsers, getUsersByFilter} from "../../services/UserService";
import AdminTableList from "./AdminTableList";
import TablePagination from "../pagination/TablePagination";
import {ITEMS_PER_PAGE} from "../../constants/PaginationConstants";
import {NavigateFunction, useNavigate} from "react-router";
import {HomeRouteConstant} from "../../constants/RoutesConstants";
import {showToast} from "../utils/UtilsToaster";
import FormGroup from "../utils/FormGroup";


/**
 * Composant Admin : Ce composant représente la page d'admin de l'application.
 *
 * @returns {JSX.Element | null}.
 */
const AdminPage: FC = (): JSX.Element => {
    const {user}: AuthContext = useContext<AuthContext>(authContext);
    const [users, setUsers]: [undefined | AllUsers, Dispatch<SetStateAction<void | AllUsers>>] = useState<AllUsers | undefined>();
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    const [currentPage, setCurrentPage]: [number, Dispatch<SetStateAction<number>>] = useState(1);
    const [itemsPerPage, setItemsPerPage]: [number, Dispatch<SetStateAction<number>>] = useState(15);
    const [searchInput, setSearchInput]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => {
        /**
         *  Vérifie que l'utilisateur est bien un admin et non pas un rigolo
         */
        if (user.roles.includes("ROLE_ADMIN")) {
            setAllUsersContent()
        } else {
            showToast(t("admin.error"), true)
            navigate(HomeRouteConstant.path)
        }
    }, []);

    /**
     *  Permets de récupérer la liste des utilisateurs
     */
    const setAllUsersContent = async (): Promise<void | AllUsers> => {
        setUsers(await getAllUsers());
    };

    /**
     * Permets de changer le nombre d'items par page
     *
     */
    const handleItemsPerPageChange = (items: number): void => {
        setCurrentPage(1)
        setItemsPerPage(items);
    };

    /**
     * Permets de remplir le texte de recherche à chaque changement
     */
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    /**
     * Permets de rechercher un utilisateur grâce au champ de recherche
     */
    const handleSearchClick = async (): Promise<void> => {
        if (searchInput === "") {
            setUsers(await getAllUsers());
        }
        setUsers(await getUsersByFilter(searchInput))
    };

    return users ? (
        <Container>
            <Row className="justify-content-center text-center">
                <Title title={t('admin.title')}/>

                <Row>
                    <Col className="col-6">
                        <FormGroup label={t("admin.searchPoint")}
                                   type="text" name="searchBar"
                                   placeholder={t("admin.searchPlaceholder")}
                                   onChange={handleSearchChange}/>
                    </Col>
                    <Col className="col-1 mt-5">
                        <Button onClick={handleSearchClick}>{t("admin.searchBtn")}</Button>
                    </Col>
                </Row>

                <Col className="pb-2 pt-4">
                    <Table hover className="table-secondary">
                        <thead>
                        <tr>
                            <th>{t('account.id')}</th>
                            <th>{t('account.name')}</th>
                            <th>{t('account.familyName')}</th>
                            <th>{t('account.email')}</th>
                            <th>{t('account.status')}</th>
                        </tr>
                        </thead>
                        <AdminTableList users={users.users} startIndex={startIndex} endIndex={endIndex}/>
                    </Table>
                </Col>
                <TablePagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalPages={Math.ceil(users.users.length / itemsPerPage)}
                    handlePageChange={setCurrentPage}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPageOptions={ITEMS_PER_PAGE}
                />
            </Row>
        </Container>
    ):null;
}

export default AdminPage;
