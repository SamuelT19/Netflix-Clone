import React from 'react'
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_container">
          <div className="footer_icons">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Cotact Us</li>
              </ul>
            </div>
          </div>
          <div className='footer_service'>
            <span>Service Code</span>
          </div>
          <div>&copy; 1997-2024 Netflix, INc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer