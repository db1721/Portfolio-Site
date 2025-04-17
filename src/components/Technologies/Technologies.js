import React from 'react';
import { DiFirebase, DiReact, DiIonic, DiAtom, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {/* I have worked with a range of technologies in the web development world.
      From Back-end to Design */}
    </SectionText>
    <List>
      {/* LANGUAGES */}
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            • JavaScript / TypeScript<br/>
            • HTML5 / CSS3<br/>
            • Python<br/>
            • Java<br/>
            • C# / C++<br/>
            • SQL / NoSQL (MongoDB, DynamoDB)<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* FRAMEWORKS & LIBRARIES */}
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks & Libraries</ListTitle>
          <ListParagraph>
            • React.js / Next.js<br/>
            • Django<br/>
            • Express.js / Node.js<br/>
            • Bootstrap / Tailwind CSS<br/>
            • Angular<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* CLOUD & DEVOPS */}
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            • AWS (EC2, S3, Lambda, CloudFormation, RDS)<br/>
            • Docker<br/>
            • CI/CD: GitHub Actions, Jenkins<br/>
            • Cloud9 IDE<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* TOOLS & EDITORS */}
      <ListItem>
        <DiAtom size="3rem" />
        <ListContainer>
          <ListTitle>Tools & IDEs</ListTitle>
          <ListParagraph>
            • VS Code / IntelliJ IDEA<br/>
            • Git / GitHub / GitLab<br/>
            • Postman<br/>
            • CodeBlocks / Eclipse / NetBeans<br/>
            • Chrome DevTools<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
