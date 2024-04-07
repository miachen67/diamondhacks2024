import Link from 'next/link';

const PlacesNearMeButton = () => {
    return (
        <main>
            <Link href = "/placesNearMe">
                {/* <a>submitTicket/page.js</a> */}
                <button>Places Near Me</button>
                {/* <a className ="button">Go to another Page</a> */}
            </Link>
        </main>
    );
}
 
export default PlacesNearMeButton;