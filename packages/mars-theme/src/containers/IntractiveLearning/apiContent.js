import React from 'react';
import ApiImg1 from '../../assets/images/image28.png';
import ApiImg2 from '../../assets/images/Group353.png';
import ApiImg3 from '../../assets/images/api3.svg';
import ApiImg4 from '../../assets/images/image29.svg';
const ApiSection = () => {
 return (
  <div className="container api-section">
   <h2>WHAT CAN you DO WITH THE CURRIKI API?</h2>
   <div className="api-content flex-normal">
    <div className="api-content-detail mr-90">
     <h3>Use CurrikiStudio to build and publish interactive courses</h3>
     <p>
      CurrikiStudio is designed to help organizations transform curriculum into what drives learner
      engagement. With a wide library of diverse activity types and the ability to completely
      customize the brand experience and publishing destinations, CurrikiStudio is the best
      all-in-one solution for building the next generation of learning experiences.
     </p>
     <a href="wwww.curriki.org" target="_blank">
      See documentation
     </a>
    </div>
    <div>
     <img className="api-img" src={ApiImg1} alt="api-content-img" />
    </div>
   </div>

   <div className="api-content flex-reverse">
    <div>
     <img className="api-img" src={ApiImg2} alt="api-content-img" />
    </div>
    <div className="api-content-detail ml-75">
     <h3>Use CurrikiStudio to build and publish interactive courses</h3>
     <p>
      CurrikiStudio is designed to help organizations transform curriculum into what drives learner
      engagement. With a wide library of diverse activity types and the ability to completely
      customize the brand experience and publishing destinations, CurrikiStudio is the best
      all-in-one solution for building the next generation of learning experiences.
     </p>
     <a href="wwww.curriki.org" target="_blank">
      See documentation
     </a>
    </div>
   </div>

   <div className="api-content flex-normal">
    <div className="api-content-detail mr-90">
     <h3>Use CurrikiStudio to build and publish interactive courses</h3>
     <p>
      CurrikiStudio is designed to help organizations transform curriculum into what drives learner
      engagement. With a wide library of diverse activity types and the ability to completely
      customize the brand experience and publishing destinations, CurrikiStudio is the best
      all-in-one solution for building the next generation of learning experiences.
     </p>
     <a href="wwww.curriki.org" target="_blank">
      See documentation
     </a>
    </div>
    <div>
     <img className="api-img" src={ApiImg3} alt="api-content-img" />
    </div>
   </div>

   <div className="api-content flex-reverse">
    <div>
     <img className="api-img" src={ApiImg4} alt="api-content-img" />
    </div>
    <div className="api-content-detail ml-75">
     <h3>Use CurrikiStudio to build and publish interactive courses</h3>
     <p>
      CurrikiStudio is designed to help organizations transform curriculum into what drives learner
      engagement. With a wide library of diverse activity types and the ability to completely
      customize the brand experience and publishing destinations, CurrikiStudio is the best
      all-in-one solution for building the next generation of learning experiences.
     </p>
     <a href="wwww.curriki.org" target="_blank">
      See documentation
     </a>
    </div>
   </div>
  </div>
 );
};

export default ApiSection;
