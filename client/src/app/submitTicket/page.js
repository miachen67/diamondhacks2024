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
            <h1 className="headingBox">Submit a new ticket</h1>

            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label className="ticketLabel">Building Name:</label>
                    <input
                    type="text"
                    required
                    value={buildingName}
                    onChange={handleBuildingNameChange}
                    className="ticketInput"
                    />
                </div>
                
                <div className="form-group">
                    <label className="ticketLabel">Address:</label>
                    <input
                    type="text"
                    required
                    value={address}
                    onChange={handleAddressChange}
                    className="ticketInput"
                    />
                </div>  

                <h3 className="headingBox2">Click all that Apply:</h3> 

                <input
                    type="checkbox"
                    id="checkbox1"
                    name="Low-Slope Ramps"
                    checked={checkBoxes.checkbox1 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label className="ticketLabel" id="smaller">Low-Slope Ramps</label>

                <input
                    type="checkbox"
                    id="checkbox2"
                    name="Power-assisted Doors"
                    checked={checkBoxes.checkbox2 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label className="ticketLabel" id="smaller">Power-assisted Doors</label>
              
                <input
                    type="checkbox"
                    id="checkbox3"
                    name="Elevators"
                    checked={checkBoxes.checkbox3 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label className="ticketLabel" id="smaller">Elevators</label>
                   
                <input
                    type="checkbox"
                    id="checkbox3"
                    name="Accessible Washrooms"
                    checked={checkBoxes.checkbox3 || false}
                    onChange={handleCheckBoxesChange}
                />
                <label className="ticketLabel" id="smaller">Accessible Washrooms</label>
                
                <label className="ticketLabel" id="smaller">Issues:</label>
                <textarea
                    required
                    value={issues}
                    onChange={(e)=> setIssues(e.target.value)}
                ></textarea>
                <button type ="submit" className="button" id="ticketSubmit">Submit</button>
            </form>

            

        </main>
    );
}
 
export default SubmitTicket;
