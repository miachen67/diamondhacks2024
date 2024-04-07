import Image from 'next/image'
import styles from './page.module.css'
import SubmitTicket from './submitTicket/page'
import SubmitTicketButton from "@/app/components/SubmitTicketButton";


export default function Home() {
  return (
    <main>
      <h1>Welcome to our Website!</h1>
      <h3>~Keerthi, Mia, Preity~</h3>
      <SubmitTicketButton />
    </main>
  )
}
