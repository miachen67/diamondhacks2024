'use client';

import ToggleView from "../components/ToggleView";

const PlacesNearMe = () => {
    return (  
        <main>
            <ToggleView onClick={() => console.log("Button clicked!")} />
        </main>
    );
}
 
export default PlacesNearMe;