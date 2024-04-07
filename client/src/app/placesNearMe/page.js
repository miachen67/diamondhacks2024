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
            const json = await response.text();
            console.log(json);
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
            <div className="locations">
                <Locations 
                img = {'public/next.svg'} 
                locationName = {"CSE Building"} 
                rating = {"⭐⭐⭐⭐⭐"}
                specialFeatures = {"Low-slope ramps, Power-assisted doors, elevators, Accessible Washrooms"}
                />
                <Locations 
                img = {'public/next.svg'} 
                locationName = {"Franklin Antonio Hall"} 
                rating = {"⭐⭐⭐⭐"}
                specialFeatures = {"Power-assisted doors, elevators, Low-slope ramps"}
                />
                <Locations 
                img = {'public/next.svg'} 
                locationName = {"CSE Building"} 
                rating = {"⭐⭐"}
                specialFeatures = {"Power-assisted doors, elevators"}
                />
            </div>

            
            {/*
            
            <div className ="buildings">
                {buildings && buildings.map((building) => (
                    console.log(building.buildingName)
                    //<BuildingDetails key={building._id} building ={building} />
                    //<p key={building._id}> {building.buildingName} </p>
                ))}
                </div>*/}
        </div>
    );
}
 
export default PlacesNearMe;