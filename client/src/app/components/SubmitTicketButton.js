import Link from 'next/link';

const SubmitTicketButton = () => {
    return (
        <main>
            <Link href = "/submitTicket">
                {/* <a>submitTicket/page.js</a> */}
                <button>Submit a Ticket</button>
                {/* <a className ="button">Go to another Page</a> */}
            </Link>
            <h1>Submit</h1>
        </main>
    );
}
 
export default SubmitTicketButton;