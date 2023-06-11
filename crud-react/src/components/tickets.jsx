import React from 'react';

const Tickets = ({ title, name, description, viewTicketHref, deleteTicketHref }) => {
    return (
        <div className='bg-white w-9/12 drop-shadow flex flex-col select-none mx-auto'>
            <div className='flex justify-between items-center gap-3 pb-4 p-7'>
                <div class="flex gap-3 justify-center items-center">
                    <div>
                        <p class="font-bold">{name}</p>
                        <p class="font-extralight text-xs text-gray-400 pb-5">{title}</p>
                        <p class="break-words pb-4">{description}</p>

                        <div>
                            <ul className='flex items-center justify-between gap-10'>
                                <li><a href={viewTicketHref} className='text-blue-500 underline'>View Ticket</a></li>
                                <li><a href={deleteTicketHref} className='text-blue-500 underline'>Delete Ticket</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets;
