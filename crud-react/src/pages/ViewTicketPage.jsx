import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../components/navigation-bar';

const ViewTicketPage = () => {
    const [ticket, setTicket] = useState(null);
    const [inputValues, setInputValues] = useState({
        name: '',
        title: '',
        description: '',
    });
    const { id } = useParams(); 

    useEffect(() => {
        document.title = "View Ticket | Service Master";
        const fetchTicket = async () => {
            const res = await axios.get(`http://localhost:3000/${id}`);
            setTicket(res.data);
            setInputValues({ 
                name: res.data.name, 
                title: res.data.title, 
                description: res.data.description 
            });
        };

        fetchTicket();
    }, [id]);  

    const handleInputChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/${id}`, inputValues);
        setTicket(res.data);

        window.location = "/";
    }

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div className='min-h-screen bg-gray-200'>
            <NavigationBar />
            
            <div className='p-7'>
                <h1 className='text-md text-left font-bold text-black/50'> <a className='underline text-black/75' href="/">Home</a> / View:</h1>
                <div className='flex flex-col py-3 gap-3'>
                    <form onSubmit={handleSubmit} action='/'>
                        <p className="text-gray-900/75 text-sm py-2">Name</p>
                        <input name="name" className='p-2 border border-gray-400 w-96' placeholder='i.e. (Johnny Appleseed)' type="text" value={inputValues.name} onChange={handleInputChange} />
                        <p className="text-gray-900/75 text-sm py-2">Subject / Title</p>
                        <input name="title" className='p-2 border border-gray-400 w-96' placeholder='i.e. (Wi-Fi Issue With PC)' type="text" value={inputValues.title} onChange={handleInputChange} />
                        <p className="text-gray-900/75 text-sm py-2">Description</p>
                        <textarea name="description" className='w-96 p-2 h-48 border border-gray-400' placeholder='i.e. (When trying to connect to Wi-Fi...)' value={inputValues.description} onChange={handleInputChange} />
                        <div className='flex gap-3'>
                            <button className='p-1 bg-gray-100 border border-gray-400 h-10 w-32' type="submit" value="submit">Update Ticket</button>
                            <a href='/' className='p-1 bg-red-300 border text-black border-red-400 h-10 w-32 flex justify-center items-center' type="submit">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ViewTicketPage;
