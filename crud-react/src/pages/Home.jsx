import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTickets from '../components/new-tickets'
import Tickets from '../components/tickets'
import NavigationBar from '../components/navigation-bar'

const Home = () => {

    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        fetchTickets()
    }, []);

    const fetchTickets = async () => {
        const res = await axios.get('http://localhost:3000/');
        console.log(res);
        setTicket(res.data);
    };

    const deleteTicket = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/${id}`);
            fetchTickets(); // update the list after delete
        } catch (error) {
            console.error('Error deleting the ticket:', error);
        }
    }

    return (
        <div className='min-h-screen bg-gray-200'>
            <NavigationBar />
            <CreateTickets path="/new-ticket" />
            {ticket && ticket.map((ticket) => (
                <Tickets key={ticket._id} title={ticket.title} name={ticket.name} description={ticket.description} viewTicketHref={`/view-ticket/${ticket._id}`} deleteTicket={deleteTicket} id={ticket._id} />
            ))}
        </div>
    );
}

export default Home;
