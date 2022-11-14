import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      
      :root {
        --buttonGreen: #44803f;
        --buttonRed: #44803f;
        --lighttext: #CDCDCD;
        --darktext: #101828;
            --myblue: #00f;
            --text-primary: #0c2c4d;
            --background-primary: #edf0f5;
      }
/* source-sans-pro-200 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/source-sans-pro-v21-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-300 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/source-sans-pro-v21-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-regular - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/source-sans-pro-v21-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-600 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/source-sans-pro-v21-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
        /* noto-sans-regular - latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
h1 {
    text-align: center;
    margin: 0;
}
h2 {
    text-align: center;
    margin: 0.5em;
}


* {
  
  box-sizing: border-box;
}
 
      body {
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 300;
          background-color: var(--background-primary);
          color: var(--text-primary);
          margin: 0;
          padding: 15px;
          padding-bottom: 50px;
      }
      
  `;

export default GlobalStyle;
