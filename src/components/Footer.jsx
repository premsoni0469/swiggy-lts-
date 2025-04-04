import React from "react";
import Logo from "../assets/smiggy.png";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

function Footer() {
  let onlineStatus = useOnline();
  return (
    <>
      <div className="md:flex shadow py-5">
        <Link to="">
          <div className="flex items-center pb-5 md:px-40">
            <img src={Logo} alt="logo" className="xs:px-5 w-14 lg:w-24" />
            <span className="font-bold md:text-3xl text-2xl">Smiggy</span>
          </div>
        </Link>
        <div className="md:flex gap-16 lg:gap-20 align-middle text-gray-700 leading-8 mx-8 flex flex-wrap">
          <div>
            <ul>
              <li className="font-semibold text-black">Company</li>
              <Link to="about">
                <li>About</li>
              </Link>
              <Link to="smiggy-corporate">
                <li>Smiggy Corporate</li>
              </Link>
              <Link to="careers">
                <li>Careers</li>
              </Link>
              <Link to="team">
                <li>Team</li>
              </Link>
              <Link to="smiggy-instamart">
                <li>Smiggy Instagramart</li>
              </Link>
              <Link to="smiggy-dineout">
                <li>Smiggy Dineout</li>
              </Link>
              <Link to="smiggy-genie">
                <li>Smiggy Genie</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-semibold text-black">Contact Us</li>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>
                <ul className="font-semibold text-black pt-5 lg:pt-14">
                  Legal
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy Policy</li>
                  <li>Investor relations</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-semibold text-black">Available in:</li>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Chennai</li>
              <li>Kolkata</li>
              <li>Pune</li>
              <li>Hyderabad</li>
              <li>Gurgaon</li>
              <li>and +600 cities</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-semibold text-black">Life at Smiggy:</li>
              <li>Explore with Smiggy</li>
              <li>Smiggy Newz</li>
              <li>Snackables</li>
              <li>
                <ul className="font-semibold text-black pt-20">
                  Socials
                  <li className="flex gap-3 text-xl">
                    <a href="#">
                      <FaLinkedin />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaPinterest />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-8">
        <p className="text-center">
        {
          onlineStatus ? ("You are 🟢Online. You can access all of our services") : ("You are 🔴Offline. You can't access our services, kindly check your internet connection and try again")
        }
        </p>
      </div>
    </>
  );
}

export default Footer;
