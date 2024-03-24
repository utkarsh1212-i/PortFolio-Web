import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTablet, AiOutlineDownload } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";


import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href={"/"}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={"#projects"}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#tech"}>
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"}>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <a href="images/UtkarshResume.pdf" download={"Utkarsh's Resume"}>
          <NavLink>Resume</NavLink>
        </a>
          {/* <AiOutlineDownload size="3rem" />*/}
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/utkarsh1212-i" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/utkarsh-bairagi-980358191/"
        target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://utkarsh12.hashnode.dev/" target="_blank">
        {/* <AiFillHashnode size="3rem" /> */}
        <AiFillTablet size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
