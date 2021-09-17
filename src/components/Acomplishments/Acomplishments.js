import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxIcon } from './AcomplishmentsStyles';
import { certificates } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="achievement">
    <SectionDivider/>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {certificates.map(({ id, title, image, issuer }) => (
        <Box key={id}>
          <BoxNum>{issuer}<BoxIcon src={image}/></BoxNum>
          <BoxText>{title}</BoxText>
          
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
