import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer'  id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quam excepturi sint veniam doloribus fuga illum. Quisquam, iusto temporibus quis quos exercitationem commodi distinctio accusamus aspernatur illum consectetur pariatur fugiat.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul className="li">Home</ul>
                <ul className="li">About us</ul>
                <ul className="li">Delivery</ul>
                <ul className="li">Privacy Policy</ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+20-123-456-7890</li>
                    <li> contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright &copy; 2024 All rights reserved</p>
    </div>
  )
}

export default Footer