'use client';

import ToggleView from "../components/ToggleView";
import Locations from "../components/Locations";

const PlacesNearMe = () => {
    return (  
        <div>
            <ToggleView onClick={() => console.log("Button clicked!")} />
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