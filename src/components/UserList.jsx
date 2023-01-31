import React, { useCallback } from 'react';
import UserListItem from './UserListItem.jsx'

const UserList = ({ userList, userSelection, toggleUser }) => {
    const handleInput = useCallback((event) => {
        toggleUser(Number(event.target.value))
    }, [toggleUser])

    return (
        <div className="user-list">
            <ul>
                {userList.map((user) => (
                    <UserListItem key={user.id} {...user}
                                  checked={userSelection.includes(user.id)}
                                  onChange={handleInput} />
                ))}
            </ul>
        </div>
    );
};

export default React.memo(UserList);
