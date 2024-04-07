import Link from 'next/link';

const SubmitTicketButton = () => {
    return (
        <main>
            <Link href = "/submitTicket">
                <button className='button' id='centerButton'>Submit a Ticket</button>
            </Link>
        </main>
    );
}
 
export default SubmitTicketButton;