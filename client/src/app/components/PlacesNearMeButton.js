import Link from 'next/link';

const PlacesNearMeButton = () => {
    return (
        <main>
            <Link href = "/placesNearMe">
                {/* <a>submitTicket/page.js</a> */}
                <button className='button' id = 'placeButton'>Places Near Me</button>
                {/* <a className ="button">Go to another Page</a> */}
            </Link>
        </main>
    );
}
 
export default PlacesNearMeButton;