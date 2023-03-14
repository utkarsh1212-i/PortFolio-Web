import React from 'react';
import { DiBootstrap, DiFirebase, DiGit, DiGithub, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web Development space from Front-End , Back End communication to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience With <br/>
            ReactJS, <DiReact size="2rem" /><br/>
            NextJS<br/>
            Javascript <DiJavascript size="2rem" /><br/>
            RESTful APIs <br/>
            Redux-ToolKit, RTK Query <br/>
            WebSockets,<DiWebplatform size="2rem" /> WebRTC  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience With <br/>
            NodeJS <DiNodejs size="4rem" /> <br/>
            Express,<br/>
            GraphQL, <br/>
            Databases- MySQL, <DiMysql size="4rem" /><br/> 
            MongoDB  <DiMongodb size="3rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Web Design and Other Tools</ListTitle>
          <ListParagraph>
            Git <DiGit size="3rem" /> <br/>
            Github <DiGithub size="3rem" /><br />
            Bootstrap <DiBootstrap size="3rem" /><br/>
            Tailwind CSS <br/>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
