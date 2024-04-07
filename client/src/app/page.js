'use client'

import Image from 'next/image'
import styles from './page.module.css'
import SubmitTicket from './submitTicket/page'
import PlacesNearMe from './placesNearMe/page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './homepage/page'

export default function Home() {
  return (
    <main className='container'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}/>
          </Routes>
      </BrowserRouter>
    </main>
  )
}
