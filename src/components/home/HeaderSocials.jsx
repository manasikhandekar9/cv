import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaInstagram } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/manasikhandekar9' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/manasikhandekar/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/ManasiKhandekar' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/manasi9' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
