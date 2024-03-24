import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, there,
        I am Utkarsh
      </SectionTitle>
      <SectionText>
        {/* A Tech Enthusiast working to build and develop products with quality code */}
        Passionate tech enthusiast dedicated to crafting quality code and building innovative products.
      </SectionText>
      <Button onClick={() => (window.location.href = "#about" )}>
        More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
