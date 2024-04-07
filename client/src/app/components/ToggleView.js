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
            <button className="button" onClick={handleClick}>{isCardView ? 'Card View' : 'Map View'}</button>          
        </main>
    );
}
 
export default ToggleView;