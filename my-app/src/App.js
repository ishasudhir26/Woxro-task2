import React from 'react';
import './App.css';
import image from './fortnite.jpg';
import for1 from './fort1.jpg';
import for2 from './fort2.jpg';
import for3 from './fort3.jpg';
function App(){
    return (
        <div className='back'>
    <p className='textfirst'>Epic Games: An American Video Game and Software Developer And Publisher Based in Cary,North Carolina</p>
    
        <img src= {image} className="imagefirst" alt="picture"/>
        
        <p className='para'>Create play and battle with friends for free in Fortnite.Be the last player standing in battle Royale and Zero Build,experience live event, or discover over a million creator made games, including racing,parkour,zombie survival and more.Each Fortnite island has an individual age rating so you can find the one thats right for you and your friends.find it all in fortnite...Drop in.</p>
     <div className='buttonatt'>
         <button className='but'>Visit Website</button>
     
      </div>
     
      <div className='d-flex justify-content-start'>
     <img src={for1} className="imagesec" alt="ok" />
      
     </div>
     <div className='d-flex justify-content-center'>
     
     <img src={for2} className="imagesec" alt="picture2" />
     </div>
     <div className='d-flex justify-content-end'>
     <img src={for3} className="imagesec" alt="pic3" />
     </div>
     
      </div>
    )
    
}
export default App;