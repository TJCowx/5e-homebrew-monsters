import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import D20Logo from "../../assets/d20Logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#004d00",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <img src={D20Logo} alt="D20 Logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            5e Homebrew Monsters
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
