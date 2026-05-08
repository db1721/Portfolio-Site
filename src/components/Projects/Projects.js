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
            <Img src={image} alt={`${title} project screenshot`} />
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
                {tags.map((tag) => (
                  <Tag key={`${id}-${tag}`}>{tag}</Tag>
                ))}
              </TagList>
            </div>
              {/* only render UtilityList if at least one link is provided */}
              {(visit || source) && (
                  <UtilityList>
                      {visit && (
                          <ExternalLinks href={visit} target="_blank" rel="noreferrer">Program</ExternalLinks>
                      )}
                      {source && (
                          <ExternalLinks href={source} target="_blank" rel="noreferrer">Source</ExternalLinks>
                      )}
                  </UtilityList>
              )}
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;
