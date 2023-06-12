import React from 'react';

const Tickets = ({ id, title, name, description, viewTicketHref, deleteTicket }) => {
    // removed deleteTicket function from here

    return (
        <div className='bg-white my-10 w-11/12 drop-shadow flex flex-col select-none mx-auto'>
            <div className='flex justify-between items-center gap-3 pb-4 p-7'>
                <div className="flex gap-3 justify-center items-center">
                    <div>
                        <p className="font-bold">{name}</p>
                        <p className="font-extralight text-xs text-gray-400 pb-5">{title}</p>
                        <p className="break-words pb-4">{description}</p>

                        <div>
                            <ul className='flex items-center justify-between gap-10'>
                                <li><a href={viewTicketHref} className='text-blue-500 underline'>View Ticket</a></li>
                                <li><button className='text-blue-500 underline' onClick={() => deleteTicket(id)}>Delete Ticket</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets;
