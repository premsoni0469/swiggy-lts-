import React from "react";
import Logo from "../assets/smiggy.png";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:flex shadow py-5">
        <div className="flex items-center md:px-40 sm:justify-center">
          <img src={Logo} alt="logo" className="w-28" />
          <span className="font-bold md:text-3xl text-2xl">Smiggy</span>
        </div>
        <div className="md:flex gap-20 align-middle text-gray-700 leading-8 sm:px-2 flex flex-wrap">
          <div>
            <ul>
              <li className="font-semibold text-black">Company</li>
              <li>About us</li>
              <li>Smiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Smiggy Instagramart</li>
              <li>Smiggy Dineout</li>
              <li>Smiggy Genie</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-semibold text-black">Contact Us</li>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>
                <ul className="font-semibold text-black pt-20">
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
              <li>+600 cities</li>
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
    </>
  );
}

export default Footer;
