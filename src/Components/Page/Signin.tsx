import { FormEvent, useState } from 'react'
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
import paneImage from '../../assets/plane2.jpg'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface formValues {
  first_name: string
  last_name: string
  phone: string
  email: string
  password: string
}

export default function Login() {
  const [isError, setIsError] = useState('')
  const theme = useTheme()
  const Navigate = useNavigate()

  // const newUser = (values: formValues) => {
  //   return axios.post('http://localhost:5000/Signin', values)
  // }
  const newUser = async (values: formValues) => {
    try {
      const response = await axios.post('http://localhost:5000/Signin', values)
      Navigate('/login')
      return { success: true, data: response.data }
    } catch (error: any) {
      if (error.response) {
        // console.log(error.response.data.message)
        // throw new Error(error.response.data.message)

        // Handle specific errors (e.g., 400 Bad Request)
        // return { success: false, error: error.response.message }
        throw new Error(error.response.data.message)
      } else {
        // Handle other errors (e.g., network error)
        return { success: false, error: 'An error occurred while processing your request.' }
      }
    }
  }

  const mutation = useMutation(newUser)
  // const mutation = useMutation(newUser, {
  //   onError: error => {
  //     // Handle the error here, you can display a notification or update state
  //     console.error('An error occurred:', error)
  //     // You can also use React Query's queryClient to display a global error toast
  //     // queryClient.notify(error.message, 'error');
  //   }
  // })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const Formdata = new FormData(event.currentTarget)
    const values = {
      first_name: Formdata.get('first_name') as string,
      last_name: Formdata.get('last_name') as string,
      phone: Formdata.get('Phone') as string,
      email: Formdata.get('email') as string,
      password: Formdata.get('password') as string
    }
    // setValues({
    //   first_name: Formdata.get('first_name') as string,
    //   last_name: Formdata.get('last_name') as string,
    //   phone: Formdata.get('Phone') as string,
    //   email: Formdata.get('email') as string,
    //   password: Formdata.get('password') as string
    // })
    mutation.mutate(values)
  }
  const { error } = mutation
  // if (error) {
  //   setIsError(error.message)
  // }
  //
  // return

  // })

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
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="first_name"
                  label="FirstName"
                  type="text"
                  id="first_name"
                  autoComplete="first_name"
                  autoFocus
                />{' '}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="last_name"
                  label="LastName"
                  type="text"
                  id="last_name"
                  autoComplete="LastName"
                />{' '}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Phone"
                  label="Phone"
                  type="text"
                  id="Phone"
                  autoComplete="Phone"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // autoFocus
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
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Repeatpassword"
                  label="RepeatPassword"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                /> */}
                <Typography component="p" sx={{ color: 'red' }}>
                  {error?.message}
                </Typography>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    {/* <Link href="#" variant="body2">
                      {"Already have a account? Login"}
                    </Link> */}
                    <Link to="/login">{'Already have a account? Login'}</Link>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  ml: 1,
                  marginTop: 4,
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
