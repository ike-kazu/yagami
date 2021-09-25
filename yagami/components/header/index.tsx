import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar　position="static">
        <Toolbar className={styles.appbar} variant="dense">
          <div>
            <a href={'https://kcs1959.jp'}>
              <Image src='/kcslogo.png' height={90} width={180} />
            </a>
          </div>
          <div>
            <a href='https://twitter.com/kcs1959' >
              <TwitterIcon />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        
      </div>
    </div>
  );
}

export default Header;