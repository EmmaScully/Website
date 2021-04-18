import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { Content } from './Layout';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import Linkedin from '../images/linkedin.png';
import Email from '../images/email.png';
import Github from '../images/github.png';






const FooterWrapper = styled.div`
  background: ${Colors.dark};
  color: ${Colors.white};
  padding: ${props => (props.big ? '100px' : props.medium ? '100px' : '80px')} 0 60px 0;
  ${media.tablet`padding: ${props => (props.big ? '150px' : props.medium ? '100px' : '128px')} 20px 50px 20px;`}
  text-align: center;

`;

const Copyright = styled.p`
  text-align: center;
`;

const Footer = ({ big, medium }) => (
  <FooterWrapper {...big && { big }} {...medium && { medium }}>
    <Content >
      <a href="https://www.linkedin.com/in/emmascully98/"> 
        <img src={Linkedin} width={20}> 
         </img>
         </a>
             &nbsp; &nbsp; &nbsp;
         <a href="mailto:emmascully98@gmail.com"> 
         <img src={Email} width={20}> 
         </img>
         </a>
         &nbsp; &nbsp; &nbsp;
         <a href="http://github.com/EmmaScully"> 
         <img src={Github} width={20}> 
         </img>
         </a>
    </Content>
  </FooterWrapper>
);

export default Footer;
