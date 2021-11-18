import React from 'react';
import './UserRecall.css'
const UserRecall = ({elem}) => {

    return (
        <div className='message'>
            <span className='user_message'>{elem.message}</span><br />
            <span className='user'>{elem.user}</span>
            <hr />
        </div>
    );
};

export default UserRecall;