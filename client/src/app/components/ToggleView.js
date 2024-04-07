import React, { useState } from 'react';

const ToggleView = ({ onClick }) => {
    const [isCardView, setIsCardView] = useState(true);

    const handleClick = () => {
        setIsCardView(prevState => !prevState); // Toggle the state
        if (onClick) {
            onClick();
        }
    };

    return ( 
        <main>
            <div className = "toggle">
                <input type="radio" name="toggle" value="Card View" className="card-view" id="card-view" />
                <label for="card-view">Card View</label>

                <input type="radio" name="toggle" value="Map View" className="map-view" id="map-view" />
                <label for="map-view">Map View</label>

                <div className="selector">&nbsp;</div> {/*i dont think this is working*/}
            </div>          
        </main>
    );
}
 
export default ToggleView;