import * as React from 'react';
import {Col, Button} from 'react-bootstrap';

interface ItemsPerPageListItemProps {
    itemsPerPage: number;
    handleItemsPerPageChange: (items: number) => void;
    option: number
}

/**
 * Composant ItemsPerPageList : Ce composant représente la pagination d'un tableau
 * @returns React.FC<ItemsPerPageListItemProps>
 */
const ItemsPerPageListItem: React.FC<ItemsPerPageListItemProps> = ({itemsPerPage, handleItemsPerPageChange, option}) => {
    return (
        <Col className="col-1" key={option}>
            <Button
                variant={itemsPerPage === option ? 'primary' : 'secondary'}
                onClick={() => handleItemsPerPageChange(option)}
            >
                {option}
            </Button>
        </Col>
    );
};

export default ItemsPerPageListItem;
