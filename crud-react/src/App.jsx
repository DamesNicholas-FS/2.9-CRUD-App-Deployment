import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTicketPage from './pages/NewTicketPage'
import ViewTicketPage from './pages/ViewTicketPage'
import Home from './pages/Home';

function App() {

  useEffect(() => {
    document.title = "Service Master";
  }, []);

  return (
    <div className='min-h-screen bg-gray-200'>
      <BrowserRouter>
        <Routes>
          <Route name='home' path='/' element={<Home />} />
          <Route name='new-ticket' path='/new-ticket' element={<NewTicketPage />} />
          <Route name='view-ticket' path='/view-ticket/:id' element={<ViewTicketPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
