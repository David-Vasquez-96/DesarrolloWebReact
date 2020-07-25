import React, {useState} from 'react'
import { Button, makeStyles} from '@material-ui/core'
import {blue} from '@material-ui/core/colors';
import {TouchApp} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({ 
    buttongrabar: {
        margin: theme.spacing(1),
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: '#001ECE',
        '&:hover' : {
            backgroundColor: '#2746FF',
        },
    },    

}));

//Functional Component
export default function ContadorFuncion (props) {
    const classes = useStyle();

    const [contador, setContador] = useState({
        contador: 0
    })

    const onClickHandler = () => {
        setContador({
            contador: contador.contador+1
        })
    }

    const Reiniciar = () => {
        setContador({
            contador: 0
        })
    }

    return(
      <div>
        <h1>Contador Función</h1>
        <h1>{contador.contador}</h1>
        <Button label="Count" color="secondary" onClick={onClickHandler}
            startIcon={<TouchApp/>} className={classes.buttongrabar}
        >
            Contador
        </Button>                
        <Button label="Count" color="secondary" onClick={Reiniciar}
            startIcon={<TouchApp/>} className={classes.buttongrabar}
        >
            Reiniciar
        </Button>                
      </div>
    );
  };