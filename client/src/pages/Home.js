import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(15, 0, 6),
    color: '#1976d2',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  Registerbutton: {
    color: '#1976d2',
    borderColor: '#1976d2'
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              GKeep
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is a clone of Google Keep app.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color='primary' href="/login">
                      Login
                    </Button>
                  </ThemeProvider>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.Registerbutton} href="/register">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    </React.Fragment>
  );
}