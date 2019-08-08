import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 80%;
  font-family: sans-serif;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  color: #202020;
}
#root{
    margin:1rem;
}
a {
  color: inherit;
  text-decoration: inherit;
}

//mediaQueries
html{
    @media(min-width: 400px) {
      font-size: 120%;
    }
    @media (min-width: 900px) {
      font-size: 140%;
    }
    @media (min-width: 1200px) {
      font-size: 160%;
    }
    @media (min-width: 1800px) {
      font-size: 180%;
    }
    @media (min-width: 2500px) {
      font-size: 200%;
    }
}
`;

export default GlobalStyle;
