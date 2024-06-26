'use client'
import SubmitTicketButton from '@/app/components/SubmitTicketButton';
import PlacesNearMeButton from '@/app/components/PlacesNearMeButton';

const Homepage = () => {
    return (  
        <div className='content'>
          <h1 className='titleText'>Welcome to our Website!</h1>
          <p className='paragraph'> Our goal is to promote inclusivity and ensure safety for all 
            individuals by providing comprehensive accessibility and safety assessments 
            of buildings and areas on the UCSD campus. Through this platform, users will 
            have the opportunity to submit safety and accessibility tickets for areas that 
            require attention. Additionally, users will able to browse through location cards
            to check their safety and accessibility ratings. By exploring our resources and 
            contributing by submitting tickets, let's make a positive impact on accessibility 
            and safety in our communities.   
            Thanks! - Keerthi, Mia, and Preity
          </p>
            <SubmitTicketButton />
            <PlacesNearMeButton />
        </div>
    );
}
 
export default Homepage;