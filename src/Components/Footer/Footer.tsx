import { Grid, Container  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import dribble from '../../assets/dribbble.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import { Typography,Box } from '@mui/material'

interface FooterProps {}

const useStyles = makeStyles(theme => ({
  mainFooter: {
    backgroundColor: '#FFFFFF',
    marginTop: '20px',
    width: '100%',
  },
  
  contentContainer: {
    width: '100%',
  },
  socialIcons: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  list: {
    listStyle: 'none',
    padding: '1.5px',
    margin: 0,
    marginTop: theme.spacing(2.3),
    '& li': {
      marginBottom: theme.spacing(1),
      cursor: 'pointer'
    }
  },
  footerText: {
    fontFamily: 'Poppins'
  }
}))

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainFooter}>
      <Container>
        <Box className={classes.contentContainer}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={4}>
              <Typography sx={{color:'orange',fontSize:24,fontWeight:600}}>E-commerce</Typography>
              <Typography sx={{color:'Black',fontSize:16,fontWeight:600, marginTop: '12px'}}>Registered Office Address:</Typography>
              <Typography sx={{color:'black',fontSize:14,fontWeight:200, maxWidth:300}}>Office No. 18, Ashirwad Shopping, Ashirwad Township 1, Udhna, Surat-394210</Typography>
              <Box className={classes.socialIcons}>
                <a href="https://Linkedin.com/">
                  <img src={linkedin} alt="LinkedIn" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={dribble} alt="Dribbble" width={30} height={30} />
                </a>
                <a href="mailto:ashu.chauhan018@gmail.com">
                  <img src={twitter} alt="Twitter" width={30} height={30} />
                </a>
                <a href="mailto:ashu.chauhan018@gmail.com">
                  <img src={facebook} alt="Facebook" width={30} height={30} />
                </a>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Connect with Us</Typography>
              <ul className={classes.list}>
                <li>Facebook</li>
                <li>Donate</li>
                <li>Instagram</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Get to Know Us</Typography>
              <ul className={classes.list}>
                <li>About Us</li>
                <li>Press Releases</li>
                <li>Our Business</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Let Us Help You</Typography>
              <ul className={classes.list}>
                <li>Help Center</li>
                <li>Trust and Safety</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" style={{whiteSpace:'nowrap'}}>Make Money</Typography>
              <ul className={classes.list}>
                <li>Sell on our site</li>
                <li>Sell under our site Accelerator</li>
                <li>Protect and Build Your Brand</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <Box sx={{marginBottom: 2,marginTop:1}}>
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} Uprising Tradex LLP. All rights reserved.
        </Typography>
        </Box>
      </Container>
      
    </div>
  )
}

export default Footer