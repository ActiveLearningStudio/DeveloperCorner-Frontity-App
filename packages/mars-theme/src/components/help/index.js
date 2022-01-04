import React from 'react'
import { styled } from 'frontity'
import arrowIcon from '../../assets/images/arrrowIcon.png';
const Index = () => {
    return (
        <HelpSection>
           <Heading>Help</Heading>
           <HelpLinks>
               <Link>
               <img src={arrowIcon} alt=""/>
               <p> Newsletter</p>
              
               </Link>
               <Link>
               <img src={arrowIcon} alt=""/>
               <p> Community Forums</p>
              
               </Link>
               <Link>
               <img src={arrowIcon} alt=""/>
               <p>Curriki Technical Support</p>
              
               </Link>
               <Link>
               <img src={arrowIcon} alt=""/>
               <p> Schedule a Demo</p>
              
               </Link>
           </HelpLinks>
        </HelpSection>
    )
}

export default Index
const HelpSection = styled.div`
padding:26px;
width:200px;
 border-left: 1px solid #E5E5E5;

`;
const Heading = styled.h3`
margin-bottom:40px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #F8AF2C;
`;
const HelpLinks = styled.div`

`;
const Link = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
p{
    font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #084892;
width:136px;
margin-bottom:0px !important;
margin-left:10px;

}
`;

