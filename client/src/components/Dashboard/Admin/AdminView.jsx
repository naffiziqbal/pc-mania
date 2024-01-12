import React from 'react';
import SharedProfileUI from '../ui/SharedProfileUI';

const AdminView = ({ user }) => {
    return (
        <div className='w-full'>
            <SharedProfileUI user={user} />
            <hr />
            <section className='mt-5'>
                <h3 className='text-xl font-bold '>Orders</h3>
                
            </section>
        </div>
    );
};

export default AdminView;
