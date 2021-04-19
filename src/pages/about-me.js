import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Placeholder from '../images/placeholder.png';
import { darken } from 'polished';
import Colors from '../Colors';
import { HireMe, LinkButton } from '../components/Button.js';
const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;


const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 150px;
    width: 40%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          
         
            
        
          
          <Content>
          <t.H1 green align="center">
              My Projects
            </t.H1>
          </Content>

          <Block>
            <BlockContent>
              <DivWrapper>
                
                <iframe src="https://player.vimeo.com/video/515046413" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Summer Research Scholarship</t.H2>
                <t.P>Electrode Etching and Neuropixels Data Analysis</t.P>
                <t.P>Over the summer of 2020 / 2021 I worked with Dr. Yan Wong and the Monash Vision Group, shadowing them on their Bionic Vision program. I assisted with animal experiments and have learnt valuable skills in research and data analysis. My project consisted of creating a data analysis pipeline working with new brain-recording electrodes and developing an electrode-etching process</t.P>
                
              </DivWrapper>
            </BlockContent>
          </Block>
          

          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Lung Rehabilitation App</t.H2>
                <t.P>"Project TARA" with MYMI</t.P>
                <t.P>I worked with MYMI to develop Project TARA (The Alfred Rehabilitation App). I developed wireframes, patient-need stories, and basic coding. The app is for patients who have just received a lung transplant and require in-depth management for their medication and rehabilitation program.  This application has now been forwarded to a professional programmer to continue its development. </t.P>
                
              </DivWrapper>
              <DivWrapper>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/bKgOIQG4ZqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </DivWrapper>
            </BlockContent>
          </Block>


        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
