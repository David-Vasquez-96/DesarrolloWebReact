import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Typography, Grid, Container, CssBaseline, Box} from '@material-ui/core';

const Clock = () => {
    const [date, setDate] = useState(new Date());
  
   //Replaces componentDidMount and componentWillUnmount
   useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     return (
        <div>
            <Container >
                <Grid container direction="column" justify="center" alignItems="center">
                    <Box pt={4} component="span">
                        <h2>Time {date.toLocaleTimeString()}</h2>              
                    </Box>
                </Grid>           
            </Container>                        
        </div>
      );
  }

export default function HomePage() {

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" color="primary" elevation="0">
              <Toolbar variant="dense">
                <Typography variant="h6">
                    Proyecto React.js
                </Typography>
              </Toolbar>
            </AppBar>      
            <Clock />
        </div>
    )
}