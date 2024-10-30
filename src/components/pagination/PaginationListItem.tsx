import * as React from 'react';
import {Pagination} from 'react-bootstrap';

interface PaginationListItemProps {
    currentPage: number;
    option: number;
    handlePageChange: (page: number) => void;
}

/**
 * Composant PaginationListItem : Ce composant représente un item de pagination
 * @returns React.FC<PaginationListItemProps>
 */
const PaginationListItem: React.FC<PaginationListItemProps> = ({currentPage, handlePageChange, option}) => {
    return (
        <Pagination.Item
            key={option}
            active={currentPage === option + 1}
            onClick={() => handlePageChange(option + 1)}
        >
            {option + 1}
        </Pagination.Item>
    );
};

export default PaginationListItem;
