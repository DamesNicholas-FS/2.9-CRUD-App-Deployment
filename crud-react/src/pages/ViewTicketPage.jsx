import React, { useEffect } from 'react';
import NavigationBar from '../components/navigation-bar';

const ViewTicketPage = () => {

    useEffect(() => {
        document.title = "View Ticket | Service Master";
    }, []);

    return (
        <div className='min-h-screen bg-gray-200'>
            <NavigationBar />
            
            <div className='p-7'>
                <h1 className='text-md text-left font-bold text-black/50'> <a className='underline text-black/75' href="/">Home</a> / View:</h1>
                <div className='flex flex-col py-3 gap-3'>
                    <form>
                        <p for="" className="text-gray-900/75 text-sm py-2">Name</p>
                        <input className='p-2 border border-gray-400 w-96' placeholder='i.e. (Johnny Appleseed)' type="text" name="" id="" /> <a href="" className='underline text-black/75'>Edit</a>
                        <p for="" className="text-gray-900/75 text-sm py-2">Subject / Title</p>
                        <input className='p-2 border border-gray-400 w-96' placeholder='i.e. (Wi-Fi Issue With PC)' type="text" name="" id="" /> <a href="" className='underline text-black/75'>Edit</a>
                        <p for="" className="text-gray-900/75 text-sm py-2">Description</p>
                        <textarea className='w-96 p-2 h-48 border border-gray-400' placeholder='i.e. (When trying to connect to Wi-Fi...)' ></textarea> <a href="" className='underline text-black/75'>Edit</a>
                    </form>
                    <div className='flex gap-3'>
                        <button className='p-1 bg-gray-100 border border-gray-400 h-10 w-32' type="submit">Update Ticket</button>
                        <a href='/' className='p-1 bg-red-300 border text-black border-red-400 h-10 w-32 flex justify-center items-center' type="submit">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTicketPage;
