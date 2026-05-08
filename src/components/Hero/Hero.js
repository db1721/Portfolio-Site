import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Dan Beck's <br />
        Portfolio
      </SectionTitle>
    </LeftSection>
  </Section>
);

export default Hero;
