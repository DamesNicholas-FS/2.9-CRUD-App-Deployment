import React from 'react';
import CreateTickets from '../components/new-tickets'
import Queue from '../components/queue'
import Tickets from '../components/tickets'
import NavigationBar from '../components/navigation-bar'

const Home = () => {
    return (
        <div className='min-h-screen bg-gray-200'>
            <NavigationBar />
            <CreateTickets path="/new-ticket" />
            <Queue />
            <Tickets />
        </div>
    );
}

export default Home;
