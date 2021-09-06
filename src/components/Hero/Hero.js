import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, HeroImg } from './HeroStyles';
import { MyImage } from '../../constants/constants';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Dan Beck's <br />
        Portfolio
      </SectionTitle>
      {/* {MyImage.map(({ image }) => (
      <MyImage>
        {image}
      </MyImage>
      ))} */}
      {/* <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;