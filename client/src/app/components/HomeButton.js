import Link from 'next/link';

const HomeButton = () => {
    return (
        <main>
            <Link href = "/homepage">
                <button className='button' id='centerButton'>Home</button>
            </Link>
        </main>
    );
}
 
export default HomeButton;