import React from 'react';
import { DiFirebase, DiReact, DiIonic, DiAtom } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {/* I have worked with a range of technologes in the web development world. 
      From Back-end to Design */}
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with:<br/>
            CSS<br/>
            HTML<br/>
            Javascipt<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with:<br/>
            C<br/>
            C++<br/>
            Java<br/>
            Python<br/>
            SQL<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIonic size="3rem"/>
        <ListContainer>
          <ListTitle>Development Tools</ListTitle>
          <ListParagraph>
            Experience with:<br/>
            Atom<br/>
            AWS<br/>
            Azure<br/>
            Cloud9 IDE<br/>
            CodeBlocks<br/>
            DynamoDB<br/>
            Eclispe<br/>
            Github<br/>
            GIT<br/>
            MongoDB<br/>
            VS Code<br/>
            NetBeans<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAtom size="3rem"/>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with:<br/>
            Bootstrap<br/>
            Flask<br/>
            React.js<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
