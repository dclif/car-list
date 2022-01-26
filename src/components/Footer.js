import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  
    return (
      
      <div className='footer'>
        <TwitterIcon fontSize='large' sx={{ display: { margin:"1rem"} }}/>
        <InstagramIcon fontSize='large' sx={{ display: { margin:"1rem"} }}/>
        <FacebookIcon fontSize='large'  sx={{ display: { margin:"1rem"} }}/>
        <YouTubeIcon fontSize='large'  sx={{ display: { margin:"1rem"} }}/>
        <LinkedInIcon fontSize='large'  sx={{ display: { margin:"1rem"} }}/>
        <PinterestIcon fontSize='large'  sx={{ display: { margin:"1rem"} }}/>
      </div>
    )
  }
  
  export default Footer;