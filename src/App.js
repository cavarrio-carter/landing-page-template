import logo from './logo.svg';
import './App.css';
import EnterButton1 from './EnterButton1.js'
import EnterButton2 from './EnterButton2.js'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function App() {
  return (
    <section class="hero">
        <div class="hero-content">
          <h1>
            [Title]
            </h1>

            <h2 class="hero-subtitle">
            [subtitle]
            </h2>

            <EnterButton1></EnterButton1>


          </div>
    </section>
  );
}

export default App;
