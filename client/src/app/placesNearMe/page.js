'use client';

import ToggleView from "../components/ToggleView";
import Locations from "../components/Locations";
import {useEffect, useState} from 'react';
import BuildingDetails from '../components/BuildingDetails'

const PlacesNearMe = () => {

    const[buildings, setBuildings] = useState (null);

    useEffect(() =>{
        const fetchBuildings = async () => {
            const response = await fetch('http://localhost:4000/api/buildings');
            const json = await response.json();

            if (response.ok){
                setBuildings(json);
            }
        }
        fetchBuildings();
    }, []);
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
            <div className ="buildings">
                {buildings && buildings.map((building) => (
                    <BuildingDetails key={building._id} building ={building} />
                    // <p key = {building._id}>{building.buildingName}</p>
                ))}
            </div>
        </div>
    );
}
 
export default PlacesNearMe;