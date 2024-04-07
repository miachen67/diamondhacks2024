import Image from "next/image";
import img from '../../../public/next.svg'

const Locations = ({img, locationName, rating, specialFeatures}) => {
    return (  
        <div className="locationCard">
            <div className="imageCard">
                <Image 
                src = {img} 
                alt={"Image of Location next"} 
                width = {300}
                height = {100}
                className="imageCard"
                />
            </div>
            <div className="locationName">
                <p>{locationName}</p>
            </div>
            <div className="rating">
                <p>{rating}</p>
            </div>
            <div className="specialFeatures">
                <p>{specialFeatures}</p>
            </div>
        </div>
    );
}
 
export default Locations;