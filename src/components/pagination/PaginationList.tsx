import * as React from 'react';
import {Pagination} from 'react-bootstrap';
import PaginationListItem from "./PaginationListItem";

interface PaginationListProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

/**
 * Composant PaginationList : Ce composant représente la pagination d'un tableau
 * @returns React.FC<PaginationListProps>
 */
const PaginationList: React.FC<PaginationListProps> = ({
                                                             currentPage,
                                                             totalPages,
                                                             handlePageChange,

                                                         }) => {
    return (
        <Pagination className="pagination">
            {Array.from({length: totalPages}).map((_, index) => (
                <PaginationListItem
                    currentPage={currentPage}
                    option={index}
                    handlePageChange={handlePageChange}
                />
            ))}
        </Pagination>
    );
};

export default PaginationList;
