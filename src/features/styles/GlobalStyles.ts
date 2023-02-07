import { createGlobalStyle} from "styled-components"
import Fonts from "./Headers";
import userSettings from "../../Story/settings";

export const GlobalStyles = createGlobalStyle<{theme: {body: string, text: string, sidebar: string, sidebarText: string}}>`
  :root {
    --landscape-width: 20;
    --portrait-width: 80vw;
    --header-height: 50px;
    --secs: 0.4s;
    --modal-close-icon-width: 50px;
    --toastify-color-progress-dark: #ffffff;
    --toastify-color-progress-light: #000000;
    --toastify-color-light: rgba(209, 209, 209, 0.9);
    --toastify-color-dark: rgba(18, 18, 18, 0.9);
  }

  ;
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: ${userSettings.defaults.font}, Helvetica, Arial, Roboto, sans-serif;
    font-size: ${userSettings.defaults.fontSize};
    transition: all 0.50s linear;
    min-height: 100vh;
    max-width: 100vw;
    margin: 0;
    overflow: hidden;
  }

  ;
  #sidebar {
    background: ${({theme}) => theme.sidebar};
    color: ${({theme}) => theme.sidebarText};
    transition: all 0.50s linear;
  }

  ;
  .fullscreen-enabled {
    background: ${({theme}) => theme.body};
  }
  ${Fonts}
`;