import React from 'react'
import concordiaLogo from '../concordia2.png';
import fccLogo from '../fcc3.png';

export const Education = (props) => {
  return (
    <div>
      <div className="my-2 flex justify-between items-center">
        {/*header-description*/}
        <div>
          <header className="font-medium text-2xl">Bachelor of Engineering</header>
          <p className="my-1 text-sm italic font-normal">Relevant courses: Advanced C++ Programming, Microcontrollers for Mechatronics, Probability & Statistics </p>
          <p className="text-base font-normal my-1">Concordia University, Gina Cody School of Engineering and Computer Science</p>
          <p className="text-sm">Montreal, QC</p>
        </div>
        <div>
        {/*logo*/}
          <img src={concordiaLogo} alt="Concordia Logo" className=""/>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        {/*header-description*/}
        <div>
          <header className="font-medium text-2xl">Responsive Web Design Certification</header>
          <a href="https://www.freecodecamp.org/certification/fccf2408620-13c2-464d-b69a-e93d6248b1ee/responsive-web-design" target="_blank" className="text-blue-700 hover:text-blue-400 text-sm">Source</a>
        </div>
        <div>
        {/*logo*/}
          <img src={fccLogo} alt="freeCodeCamp Logo" className=""/>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        {/*header-description*/}
        <div>
          <header className="font-medium text-2xl">Javascript Algorithms and Data Structures Certification</header>
          <a href="https://www.freecodecamp.org/certification/fccf2408620-13c2-464d-b69a-e93d6248b1ee/javascript-algorithms-and-data-structures" target="_blank" className="text-blue-700 hover:text-blue-400 text-sm">Source</a>
        </div>
        <div>
        {/*logo*/}
          <img src={fccLogo} alt="freeCodeCamp Logo" className=""/>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        {/*header-description*/}
        <div>
          <header className="font-medium text-2xl">APIs and Microservices Certification</header>
          <a href="https://www.freecodecamp.org/certification/fccf2408620-13c2-464d-b69a-e93d6248b1ee/apis-and-microservices" target="_blank" className="text-blue-700 hover:text-blue-400 text-sm">Source</a>
        </div>
        <div>
        {/*logo*/}
          <img src={fccLogo} alt="freeCodeCamp Logo" className=""/>
        </div>
      </div>
    </div>
  )
}

export default Education



