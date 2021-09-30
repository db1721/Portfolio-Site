import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxIcon } from './AcomplishmentsStyles';
import { certificates, avCertificates } from '../../constants/constants';

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
    <SectionSubTitle>AV Certifications</SectionSubTitle>
    <Boxes>
      {avCertificates.map(({ id, title, image, issuer }) => (
        <Box key={id}>
          <BoxNum>{issuer}<BoxIcon src={image}/></BoxNum>
          <BoxText>{title}</BoxText>
          
        </Box>
      ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
