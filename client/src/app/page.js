import Image from 'next/image'
import styles from './page.module.css'
import SubmitTicket from './submitTicket/page'
import SubmitTicketButton from '@/app/components/SubmitTicketButton';
import PlacesNearMe from './placesNearMe/page';
import PlacesNearMeButton from '@/app/components/PlacesNearMeButton';


export default function Home() {
  return (
    <main className='container'>
      <div className='content'>
        <h1>Welcome to our Website!</h1>
        <h3>~Keerthi, Mia, Preity~</h3>
        <SubmitTicketButton />

        <PlacesNearMeButton />
        
      </div>
      
    </main>
  )
}
