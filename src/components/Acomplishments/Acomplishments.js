import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { certificates } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="achievement">
    <SectionDivider/>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {certificates.map(({ id, title, image }) => (
        <Box key={id}>
          <BoxNum>{title}</BoxNum>
          <BoxText></BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
