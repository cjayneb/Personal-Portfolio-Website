import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const getFile = () => {
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am Jean-Christophe Benoit <br />
        I do programming stuff
      </SectionTitle>
      <SectionText>
        My purpose is to develop software for you.
      </SectionText>
      <a href='/downloads/cv.pdf' download='JCB_CV(EN).pdf'>
        <Button children="Download my resume"></Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;