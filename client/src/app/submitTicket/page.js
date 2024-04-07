'use client'
// import {useClient} from 'next/client';
import SubmitTicketButton from "@/app/components/SubmitTicketButton";
import {useState} from 'react';
// import { useRouter } from 'next/router';


const SubmitTicket = () => {
    // const router =useRouter();

    const [buildingName, setBuildingName] = useState('');
    const [address, setAddress] = useState('');
    const [checkBoxes, setCheckBoxes] = useState({});
    const[issues,setIssues] =useState('');


    const handleCheckBoxesChange = (e) =>{
        const{name, checked} = e.target;
        setCheckedItems({ ...checkBoxes,[name]: checked});
    }

    const handleBuildingNameChange = (e) =>{
        setBuildingName(e.target.value);
    }
    const handleAddressChange = (e) =>{
        setAddressName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Building name: ', buildingName);

        // router.push
    }
    return ( 
        <main>
            <h1>Submit a new ticket</h1>
            {/* <SubmitTicketButton /> */}
            <form onSubmit={handleSubmit}>
                <label>Building Name:</label>
                <input
                    type="text"
                    required
                    value={buildingName}
                    // onChange={(e)=> setBuildingName(e.target.value)}
                    onChange ={handleBuildingNameChange}
                    
                />
                <p>{'\n'}</p>
                
                <label>Address:</label>
                <input
                    type="text"
                    required
                    value={address}
                    // onChange={(e)=> setBuildingName(e.target.value)}
                    onChange ={handleAddressChange}
                />
                <p>{'\n'}</p>
                <h3>Submit all that Apply</h3> 
                <p>{'\n'}</p>   
                <input
                    type="checkbox"
                    id="checkbox1"
                    name="Low-Slope Ramps"
                    checked={checkBoxes.checkbox1 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label>Low-Slope Ramps</label>
                <p>{'\n'}</p>   
                <input
                    type="checkbox"
                    id="checkbox2"
                    name="Power-assisted Doors"
                    checked={checkBoxes.checkbox2 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label>Power-assisted Doors</label>
                <p>{'\n'}</p>   
                <input
                    type="checkbox"
                    id="checkbox3"
                    name="Elevators"
                    checked={checkBoxes.checkbox3 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label>Elevators</label>
                <p>{'\n'}</p>   
                <input
                    type="checkbox"
                    id="checkbox3"
                    name="Accessible Washrooms"
                    checked={checkBoxes.checkbox3 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label>Accessible Washrooms</label>
                <p>{'\n'}</p>
                <label>Issues:</label>
                <textarea
                    required
                    value={issues}
                    onChange={(e)=> setIssues(e.target.value)}
                ></textarea>
                <button type ="submit">Submit</button>
            </form>

            

        </main>
    );
}
 
export default SubmitTicket;
