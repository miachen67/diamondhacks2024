'use client'
// import {useClient} from 'next/client';
import SubmitTicketButton from "@/app/components/SubmitTicketButton";
import {useState} from 'react';
// import { useRouter } from 'next/router';


const SubmitTicket = () => {
    // const router =useRouter();

    const [buildingName, setBuildingName] = useState('');

    const handleBuildingNameChange = (e) =>{
        setBuildingName(e.target.value);
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
                <button type ="submit">Submit</button>
            </form>

            {/* <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={buildingName}
                    onChange={(e)=> setBuildingName(e.target.value)}
                /> */}

            {/* <h2>Building Name: + {buildingName}</h2> */}
        </main>
    );
}
 
export default SubmitTicket;
// import { useState } from 'react';

// const SubmitTicket = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="textInput">Enter text: </label>
//       <input
//         id="textInput"
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <p>You entered: {inputValue}</p>
//     </div>
//   );
// };

// export default SubmitTicket;
