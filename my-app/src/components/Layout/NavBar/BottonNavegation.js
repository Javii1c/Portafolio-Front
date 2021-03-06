import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottonNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation value={props.value} onChange={props.click} className={classes.root}>
      <BottomNavigationAction label={props.label} value={props.value} icon={props.icon} />
    </BottomNavigation>
  );
}