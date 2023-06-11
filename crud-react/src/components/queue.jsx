import React from 'react';

const Queue = () => {
    return (
        <div className='flex justify-center items-center m-10 mt-3 '>
            <div className='border w-full flex justify-center items-center'>
                <div className='bg-white w-1/3 flex flex-col justify-center items-center p-5 gap-3 drop-shadow'>
                    <h1 className='text-5xl italic font-extrabold'>2</h1>
                    <p className='text-black/75 font-light text-md text-center flex justify-center items-center w-full'>Open Tickets</p>
                </div>
            </div>
        </div>
    );
}

export default Queue;
