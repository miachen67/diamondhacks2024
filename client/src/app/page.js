import Image from 'next/image'
import styles from './page.module.css'
import SubmitTicket from './submitTicket/page'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <SubmitTicket/>
    </main>
  )
}
