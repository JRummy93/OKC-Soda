import './App.css';
import { Button, AppBar, Card, Paper, Box, Container, Grid, Typography} from '@mui/material';
import Navbar from './Components/Navbar.jsx';
import BackGroundVideo from './Video/landingvideo.mp4';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar/>
        <video autoPlay loop muted id="video" width={'100%'}><source src={BackGroundVideo} type="video/mp4"/></video>
        <Typography variant="h2" component="h2" sx={{textAlign: 'center'}}>
          Making soda an experience again
        </Typography>
      </Container>
    </div>
  );
}

export default App;