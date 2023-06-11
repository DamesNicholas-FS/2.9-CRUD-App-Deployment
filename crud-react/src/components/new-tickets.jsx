import React from 'react';

const CreateTickets = ({ path }) => {
    
    return (
        <div className='flex justify-center items-center bg-white m-10 mb-0 drop-shadow '>
            <a href={path} className='text-black/75 font-light text-xl flex justify-center items-center w-11/12 h-20'>Create New Ticket</a>
        </div>
    );
}

export default CreateTickets;

