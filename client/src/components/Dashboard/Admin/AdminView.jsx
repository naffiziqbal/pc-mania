import React from 'react';
import SharedProfileUI from '../ui/SharedProfileUI';

const AdminView = ({ user }) => {
    return (
        <div>
            <SharedProfileUI user={user} />
        </div>
    );
};

export default AdminView;
