import React from 'react';

const UserListItem = ({ id, name, checked, onChange }) => {
    console.log('render', id)
    return (
        <li>
            <label>
                <input type="checkbox"
                       value={id}
                       checked={checked}
                       onChange={onChange} />
                {name}
            </label>
        </li>
    );
};

export default React.memo(UserListItem);
