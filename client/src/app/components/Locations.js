import Image from "next/image";
import img from '../../../public/next.svg'

const Locations = ({img, locationName, rating}) => {
    return (  
        <div className="locationCard">
            <Image 
            src = {img} 
            alt={"Image of Location next"} 
            width = {300}
            height = {100}
            />
            <h3>{locationName}</h3>
            <h5>{rating}</h5>
        </div>
    );
}
 
export default Locations;