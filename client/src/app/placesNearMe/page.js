'use client';

import ToggleView from "../components/ToggleView";
import Locations from "../components/Locations";

const PlacesNearMe = () => {
    return (  
        <div>
            <ToggleView  />
            
            <h1>Places Near You</h1>
            <Locations 
            img = {'public/next.svg'} 
            locationName = {"CSE Building"} 
            rating = {"⭐⭐⭐⭐"}
            specialFeatures = {"Ramps, elevators"}
            />
        </div>
    );
}
 
export default PlacesNearMe;