import React from 'react';

import Image1 from '../images/11.jpg';
import Image2 from '../images/12.jpg';
import '../Style/matricharya.css';
const Matricharya = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <img
          src={Image1}
          alt="Ayurvedic Treatment 1"
          // className="rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] ring-4 transition-transform duration-300 mb-2"
        />
      </div>

      <div className="text-center">
        <img
          src={Image2}
          alt="Ayurvedic Treatment 2"
          className="h-20 w-auto mx-auto mb-4"
        />
        <h1 className=" font-bold italic text-2xl font-semibold text-gray-800">
          Matricharya: Ayurveda for Her Health & Wellness
        </h1>
        <br/>
        <p className="text-m text-justify font-medium text-black-800">
  Matricharya, an initiative by JivanAmrit Ayurveda, stands as a beacon of hope and healing for women seeking holistic <br/>and enduring solutions to their health concerns.
  Dedicated to the principles of Ayurveda, the ancient Indian system of<br/> medicine, Matricharya focuses on addressing the root causes of women's health issues rather than merely treating <br/>symptoms.
  Understanding the intricate connection between a woman's physical, mental, and emotional well-being,<br/> Matricharya offers a omprehensive and personalized approach to healthcare.
</p>
<br/>
<img
          src='https://vaidyji.com/wp-content/uploads/2025/02/wp-17392487804746895604427211311532-800x800.jpg'
          alt="Ayurvedic Treatment 2"
          className="h-200 w-auto mx-auto mb-4 margin: '10px "
        />
        
      </div>
    </div>
  );
};

export default Matricharya;
