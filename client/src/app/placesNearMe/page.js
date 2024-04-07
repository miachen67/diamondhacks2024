import Locations from "../components/Locations";

const PlacesNearMe = () => {
    return (  
        <div>
            <h1>Places Near You</h1>
            <Locations 
            img = {'public/next.svg'} 
            locationName = {"CSE Building"} 
            rating = {"5/5"}
            />
        </div>
    );
}
 
export default PlacesNearMe;