import * as React from 'react';
import {FC} from "react";
import {User} from "../../interfaces/User.interface";
import AdminTableListItem from "./AdminTableListItem";

interface AdminTableListProps {
    users: User[],
    startIndex: number,
    endIndex: number,
}

/**
 * Composant AdminTableList : Ce composant représente la liste des utilisateurs
 *
 * @returns {JSX.Element}
 */
const AdminTableList: FC<AdminTableListProps> = ({users, startIndex, endIndex}): JSX.Element => {
    return (
        <tbody>
        {users.slice(startIndex, endIndex).map((user: User) => (
            <AdminTableListItem user={user}/>
        ))}
        </tbody>
    );
}
export default AdminTableList;
