import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  const handleAñadir = () => {
    props.añadir(prev => !prev)
  }

  const handleActualizar = () => {
    props.actualizar(prev => !prev)
  }

  const handleEliminar = () => {
    props.eliminar(prev => !prev)
  }

  return (

    <div className={classes.root}>
      <ButtonGroup
        orientation={props.orientation}
        variant="text"
      >
        <Button  onClick = {handleAñadir}>Añadir</Button>
        <Button onClick = {handleActualizar}> Actualizar </Button>
        <Button onClick = {handleEliminar}>Eliminar </Button>
      </ButtonGroup>
    </div>
  );
}
