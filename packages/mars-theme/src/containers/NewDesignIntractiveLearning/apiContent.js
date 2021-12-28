import React from 'react';
import ApiImg1 from '../../assets/images/image28.png';
import ApiImg2 from '../../assets/images/Group353.png';
import ApiImg3 from '../../assets/images/api3.svg';
import ApiImg4 from '../../assets/images/image29.svg';
const ApiSection = () => {
 return (
  <div className="container api-section">
   <h2>What can you do with the Curriki API?</h2>
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
     <h3>Build & launch interactive learning apps</h3>
     <p>
     With our API, our goal is that organizations leverage our technology to save time and resources to author interactive courses. Our API is built as components so you can use pieces for creating interactive lessons, publishing to various destinations, and storing in a dynamic, searchable library (or LOR).
     </p>
     <a href="wwww.curriki.org" target="_blank">
      See documentation
     </a>
    </div>
   </div>

   <div className="api-content flex-normal">
    <div className="api-content-detail mr-90">
     <h3>Embed the Curriki authoring system</h3>
     <p>
     CurrikiStudio is designed to help organizations transform curriculum into what drives learner engagement. With a wide library of diverse activity types and the ability to completely customize the brand experience and publishing destinations, CurrikiStudio is the best all-in-one solution for building the next generation of learning experiences.
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
     <h3>Contribute new learning activities to the Curriki ecosystem</h3>
     <p>
     We are actively looking for how to integrate new tools and functionality into our open source offering. If you have an educational solution - from a full package to a snippet of code - that you think would go well in Curriki, please let us know.
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
