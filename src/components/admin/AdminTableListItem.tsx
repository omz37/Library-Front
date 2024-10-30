import * as React from 'react';
import {FC} from "react";
import {User} from "../../interfaces/User.interface";
import ChangeRentRoleButton from "./ChangeRentRoleButton";

interface AdminTableListItemProp {
    user: User
}

/**
 * Composant AdminTableListItem : Ce composant représente un utilisateur
 *
 * @returns {JSX.Element}
 */
const AdminTableListItem: FC<AdminTableListItemProp> = ({user}): JSX.Element => {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.familyName}</td>
            <td>{user.email}</td>
            <td>
                <ChangeRentRoleButton user={user} />
            </td>
        </tr>
    );
}
export default AdminTableListItem;