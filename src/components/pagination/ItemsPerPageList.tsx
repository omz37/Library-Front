import * as React from 'react';
import {Row} from 'react-bootstrap';
import ItemsPerPageItem from "./ItemsPerPageItem";

interface ItemsPerPageListProps {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    handleItemsPerPageChange: (items: number) => void;
    itemsPerPageOptions: number[];
}

/**
 * Composant ItemsPerPageList : Ce composant représente la pagination d'un tableau
 * @returns React.FC<ItemsPerPageListProps>
 */
const ItemsPerPageList: React.FC<ItemsPerPageListProps> = ({itemsPerPage, handleItemsPerPageChange, itemsPerPageOptions}) => {
    return (
        <Row>
            {itemsPerPageOptions.map((key) => (
                <ItemsPerPageItem
                    itemsPerPage={itemsPerPage}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                    option={key}
                />
            ))}
        </Row>
    );
};

export default ItemsPerPageList;
