import Image from 'next/image'
import styles from './page.module.css'
import SubmitTicket from './submitTicket/page'
import SubmitTicketButton from "@/app/components/SubmitTicketButton";


export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <SubmitTicketButton />
    </main>
  )
}
