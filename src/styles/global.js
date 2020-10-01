import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import topo from '../assets/images/topo.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=c:wght@100&display=swap');
* {
  margin: 0;
  padding:0;
  outline:0;
  box-sizing:border-box;
  font-family: sans-serif;
}
html, body {
  height: 100%;
}

body {
  background: #123456 url(${topo}) no-repeat left top;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 14px Roboto, sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

button {
  cursor: pointer;
}
`;
