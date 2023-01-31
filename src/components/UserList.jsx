import React from 'react';
import UserListItem from './UserListItem.jsx'

const UserList = ({ userList, userSelection, toggleUser }) => {
    const handleInput = (event) => {
        toggleUser(Number(event.target.value))
    }

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
