import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#1976d2'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1976d2',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#1976d2',
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
  },
});

export default function SignIn() {
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.location.replace("/");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} method="POST" onSubmit={handleSubmit} >
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </ThemeProvider>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2" className={classes.link} >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}