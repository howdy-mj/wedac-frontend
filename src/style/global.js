import { createGlobalStyle } from "styled-components";
import font1 from "./font/WhaleXSans.woff2";
import font2 from "./font/WhaleXSansBold.woff2";
import emo from "./font/emoticon.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "WhaleXSans";
    font-weight: 400;
    src: url(${font1}) format("woff2");
  }

  @font-face {
    font-family: "WhaleXSans";
    font-weight: 700;
    src: url(${font2}) format("woff2");
  }

  @font-face {
    font-family: "emoticon";
    font-weight: 400;
    src: url(${emo}) format("woff");
  }

  a,
  a:link,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    text-decoration: none;
    outline: none;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* font: inherit; */
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: "WhaleXSans";
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
