import React from 'react'
import './home.css' 
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandGoogleDrive } from "react-icons/tb";
import Img from '../assets/jhansi.jpeg'

function Home() {
  return (
    <div className='home' id='home'>
        <div className="left">
            <h3>Hi, I'm</h3>
            <h1>JHANSI NAGA BHAVANI KODURI</h1>
            <p>Motivated and enthusiastic fresher seeking an entry-level
position in a reputed organization where I can utilize my skills,
gain practical experience, and contribute to the company’s
growth through dedication and hard work.</p>
            <div className="Social-media">
                <li><a href='https://github.com/JhansiNagaBhavani'><ImGithub /></a></li>
                <li><a href='https://www.linkedin.com/in/jhansi-koduri-28456b35b/'><IoLogoLinkedin /></a></li>
                <li><a href='https://drive.google.com/drive/home'><TbBrandGoogleDrive /></a></li>
            </div>
        </div>
        <div className="right">
            <div className="profile-card">
                <div className="circle">
                    <img src={Img}
                        alt="Jhansi profile"
                        className="circle-image"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
