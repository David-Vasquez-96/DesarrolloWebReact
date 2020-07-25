import React from 'react'
import { Box, Button, Grid, makeStyles} from '@material-ui/core'
import {TouchApp} from '@material-ui/icons';
import {blue} from '@material-ui/core/colors';

import ContadorFunction from './ContadorFunction'

class ContadorClass extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        };
    }

    onClickHandler(){
        this.setState({
            contador: this.state.contador+1
        });
    }

    Reiniciar (){
        this.setState({
            contador: 0
        })
    }
    
    // classes = useStyle();
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container justify="center">
                        <Box>
                            <h1>Contador Class</h1>
                            <h1>{this.state.contador}</h1>
                            <Button label="Count" color="Primary" onClick={()=> this.onClickHandler()}
                                startIcon={<TouchApp/>}
                            >
                                Contador
                            </Button>
                            <Button label="Count" color="primary" onClick={()=> this.Reiniciar()}
                                startIcon={<TouchApp/>}
                            >
                                Reiniciar
                            </Button>
                        </Box>                      
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="center">
                        <Box>
                            <ContadorFunction onClickHandler={()=> this.onClickHandler()} />
                        </Box>
                      
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default ContadorClass