import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, StackTitleContent } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <div>
            <Hr/>
              <StackTitleContent>Stack</StackTitleContent>
              <TagList>
                {tags.map(( tag, i) => (
                  <Tag key={id}>{tag}</Tag>
                ))}
              </TagList>
            </div>
              {/* only render UtilityList if at least one link is provided */}
              {(visit || source) && (
                  <UtilityList>
                      {visit && (
                          <ExternalLinks href={visit}>Program</ExternalLinks>
                      )}
                      {source && (
                          <ExternalLinks href={source}>Source</ExternalLinks>
                      )}
                  </UtilityList>
              )}
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;