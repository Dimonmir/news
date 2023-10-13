
import { css } from '@emotion/react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  /* Reset and base styles  */
  * {
    padding: 0;
    margin: 0;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  

  /* Links */
  a, a:link, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */
  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */
  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background: transparent;
    cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;

export default GlobalStyle;
