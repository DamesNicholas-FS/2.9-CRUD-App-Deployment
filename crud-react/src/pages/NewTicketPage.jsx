import React, { useState } from 'react';
import axios from 'axios';
import NavigationBar from '../components/navigation-bar';

const NewTicketPage = () => {
    const [name, setName] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const ticketData = {
            name: name,
            title: title,
            description: description,
        };

        try {
            const response = await axios.post('http://localhost:3000/new', ticketData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Server response:', response);  
            if (response.status === 200) {
                window.location.href = '/';
            } else {
                console.error('Unexpected response status while creating the ticket:', response);
            }
        } catch (error) {
            console.error('Error creating the ticket:', error);
        }
    };

    return (
        <div className='min-h-screen bg-gray-200'>
            <NavigationBar />

            <div className='p-7'>
                <h1 className='text-md text-left font-bold text-black/50'> <a className='underline text-black/75' href="/">Home</a> / Create New Ticket</h1>
                <div className='flex flex-col py-3 gap-3'>
                    <form onSubmit={handleSubmit} action="/">
                        <p for="" className="text-gray-900/75 text-sm py-2">Your Name</p>
                        <input className='p-2 border border-gray-400 w-96' placeholder='i.e. (Johnny Appleseed)' type="text" name="name" id="name" onChange={e => setName(e.target.value)} required />
                        <p for="" className="text-gray-900/75 text-sm py-2">Subject / Title</p>
                        <input className='p-2 border border-gray-400 w-96' placeholder='i.e. (Wi-Fi Issue With PC)' type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} required />
                        <p for="" className="text-gray-900/75 text-sm py-2">Description</p>
                        <textarea className='w-96 p-2 h-48 border border-gray-400' id="description" name="description" placeholder='i.e. (When trying to connect to Wi-Fi...)' onChange={e => setDescription(e.target.value)} required ></textarea>
                        <div className='flex gap-3'>
                            <button className='p-1 bg-gray-100 border border-gray-400 h-10 w-32' type="submit" value="submit">Submit Ticket</button>
                            <a href='/' className='p-1 bg-red-300 border text-black border-red-400 h-10 w-32 flex justify-center items-center' type="submit">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewTicketPage;
