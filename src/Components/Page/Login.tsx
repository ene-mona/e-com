import { FormEvent } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// import Link from "@mui/material/Link";
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Container, useTheme } from '@mui/material'
import paneImage from '../../assets/plane1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

interface formValues {
  email: string
  password: string
}
export default function Login() {
  const theme = useTheme()

  const loginUser = (values: formValues) => {
    return axios.post('http://localhost:5000/login', values)
  }
  const mutation = useMutation(loginUser)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      email: data.get('email') as string,
      password: data.get('password') as string
      // Reapeatpassword: data.get('password')
    }
    mutation.mutate(values)
    console.log(mutation)
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
        <Grid container>
          <CssBaseline />
          <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 1,
                mx: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'scale(0.8)',

                [theme.breakpoints.down('sm')]: {
                  mx: 2,
                  my: 2
                }
              }}>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="/Forgotpassword" variant="body2">
                      Forgot password?
                    </Link> */}
                    <Link to="/Forgotpassword">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    {/* <Link href="/Signin" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link> */}
                    <Link to="/Signin">{"Don't have an account? Sign Up"}</Link>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  ml: 1,
                  marginTop: 4,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: theme.palette.grey[300]
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: theme.palette.grey[500]
                  }}>
                  <Typography variant="body1">-----------OR-----------</Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 8
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100px',
                          height: '40px',
                          border: '3px solid lightgrey',
                          borderRadius: 8
                        }}>
                        <GoogleIcon fontSize="medium" sx={{ color: '#DB4437' }} />
                        <Typography variant="caption">Google</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100px',
                          height: '40px',
                          border: '3px solid lightgrey',
                          borderRadius: 8
                        }}>
                        <FacebookIcon fontSize="medium" sx={{ color: '#1877F2' }} />
                        <Typography variant="caption">Facebook</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${paneImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',

              backgroundPosition: 'center'
            }}
          />
        </Grid>
      </Box>
    </Container>
  )
}
