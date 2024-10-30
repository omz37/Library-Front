import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import {useTranslation, UseTranslationResponse} from "react-i18next";
import PaginationList from "./PaginationList";
import ItemsPerPageList from "./ItemsPerPageList";

interface TablePaginationProps {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    handleItemsPerPageChange: (items: number) => void;
    itemsPerPageOptions: number[];
}

/**
 * Composant TablePagination : Ce composant représente la pagination d'un tableau
 * @returns React.FC<TablePaginationProps>
 */
const TablePagination: React.FC<TablePaginationProps> = ({
                                                                     currentPage,
                                                                     itemsPerPage,
                                                                     totalPages,
                                                                     handlePageChange,
                                                                     handleItemsPerPageChange,
                                                                     itemsPerPageOptions,
                                                                 }) => {
    const {t}: UseTranslationResponse<"translation", undefined> = useTranslation();
    return (
        <Row>
            <Col className="col-1">{t("pagination.page")}</Col>
            <Col className="col-4">
                <PaginationList currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
            </Col>

            <Col className="col-2">{t("pagination.items")}</Col>
            <Col className="col-5">
                <ItemsPerPageList
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPageOptions={itemsPerPageOptions}
                />
            </Col>
        </Row>
    );
};

export default TablePagination;
