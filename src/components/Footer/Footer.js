import React from 'react'
import styled from 'styled-components/macro'

import { Icons, OuterWrapper } from '../Styles/Globalstyles.js'
import { Headings } from '../Reusable/Headings';

const Footer = ({ linkedinLogo, githubLogo }) => {
  return (
    <FooterStyle>
      <Headings heading="Contact" />
      <p>Julia Östedt</p>
      <a href="mailto:julia.ostedt@gmail.com">
        julia.ostedt@gmail.com
      </a>
      <FooterIcons>
        <a
          href="https://www.linkedin.com/in/juliaostedt/"
          title="Link to LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/juliaostedt"
          title="Link to GitHub Profile"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn profile">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
      </FooterIcons>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled(OuterWrapper)`
background-color: var(--color-darkGreen);
color: white;
line-height: 1.5em;

@media screen and (min-width: 1024px) {
  a:hover {
    font-weight: 700;
  }
}
`
const FooterIcons = styled(Icons)`
  padding: 2.8em;
  justify-content: center;

   & :hover {
      opacity: 75%;
      transition: 0.3s ease;
    }
    a:hover {
    border: none;
  }
`