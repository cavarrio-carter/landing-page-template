import logo from './logo.svg';
import './App.css';
import EnterButton1 from './EnterButton1.js'
import EnterButton2 from './EnterButton2.js'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  return (
    <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Cavarrio Carter
            </h1>

            <h2 class="hero-subtitle">
            Creative Architect {bull} Forward Solutions
            </h2>

            <EnterButton1></EnterButton1>
          </div>
    </section>
  );
}

export default App;
