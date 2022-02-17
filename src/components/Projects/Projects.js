import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p) => (
        <BlogCard key={p.id}>
          <Img src={p.image} />
          <TitleContent>
            <HeaderThree>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={p.demo} target={"_blank"}>Demo</ExternalLinks>
              <ExternalLinks href={p.source} target={"_blank"}>Source Code</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>

      ))}
      <br />
    </GridContainer>
  </Section>

);

export default Projects;