import React from 'react'
// import logo from '../assets/raviKumarLogo.webp'; 
import logo from '../assets/DA_Logo.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-6'>
            <div className='flex items-center flex-shrink-0'>
                <a href="/" aria-label='Home'>
                    <img src={logo} alt="Logo" className='mx-2' width={50} height={33} />
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                
                <a href="https://www.linkedin.com/in/divyanshuaaliwal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='linkedin'
                >
                    <FaLinkedin/>
                </a>
                
                <a href="https://www.github.com/divyanshuaaliwal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='Github'
                >
                    <FaGithub/>
                </a>
                
                <a href="https://www.instagram.com/divyanshuaaliwal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='Instagram'
                >
                    <FaInstagram/>
                </a>
                
                <a href="https://www.twitter.com/divyanshualiwal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='Twtter'
                >
                    <FaSquareXTwitter/>
                </a>

            </div>
       </nav>
    )
}

export default Navbar