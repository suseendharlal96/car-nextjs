import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          Hot Wheels
        </Typography>

        <Button color="inherit">
          <Link href="/">
            <a>
              <Typography>Home</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/faq">
            <a>
              <Typography>FAQ</Typography>
            </a>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
