import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BiIntersect } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have learned a vast range of technologies in the software development world.
      From Databases to Backend to Frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size={"3em"} />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL Server (SSMS) and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiIntersect size={"3em"} />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Dynamics 365 CRM
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size={"3em"} />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
