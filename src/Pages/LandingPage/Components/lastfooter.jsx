import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import icon from "../Components/images/cutted_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Description Section */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <img src={icon} alt="Logo" className="w-auto h-14" />{" "}
            {/* Adjusted logo size */}
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            BEES Foundation is working in the area of education for the last 7
            years in which it provides free education to underprivileged
            children. Along with this, the Foundation is also working on the
            environment and evils of society like lavish weddings.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-orange-600 hover:text-orange-700 cursor-pointer text-2xl" />
            <FaInstagram className="text-orange-600 hover:text-orange-700 cursor-pointer text-2xl" />
            <FaTwitter className="text-orange-600 hover:text-orange-700 cursor-pointer text-2xl" />
            <FaGithub className="text-orange-600 hover:text-orange-700 cursor-pointer text-2xl" />
            <FaDribbble className="text-orange-600 hover:text-orange-700 cursor-pointer text-2xl" />
          </div>
        </div>

        {/* About Us Section */}
        <div className="col-span-1">
          <h3 className="text-gray-900 font-semibold mb-4 ml-6">About Us</h3>
          <ul className="space-y-3">
            <li> <Link to="/rules" className="text-gray-700 hover:text-orange-600">
                Rules</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-orange-600">
                About Us</Link>
            </li>
            <li>
            <a href="https://wa.me/+917037358787" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-orange-600">
                Whatsapp
              </a>
              </li>
            <li>
              {" "}
              <a
                href="tel:+917037358787"
                className="text-gray-700 hover:text-orange-600"
              >
                Phone Number
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="col-span-1">
          <h3 className="text-gray-900 font-semibold mb-4 ml-6">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="#web-development"
                className="text-gray-700 hover:text-orange-600"
              >
                Coding Classes
              </Link>
            </li>
            <li>
              <Link
                to="#web-design"
                className="text-gray-700 hover:text-orange-600"
              >
                English Classes
              </Link>
            </li>
            <li>
              <Link
                to="#marketing"
                className="text-gray-700 hover:text-orange-600"
              >
                Helping Environment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <h3 className="text-gray-900 font-semibold ml-6 mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <FiMail className="text-orange-600" />
              <a
                href="mailto:beesfeedback@gmail.com"
                className="text-gray-700 hover:text-orange-600"
              >
                beesfeedback@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-orange-600" />
              <a
                href="tel:7037358787"
                className="text-gray-700 hover:text-orange-600"
              >
                70-3735-8787
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-orange-600" />
              <p className="text-gray-700">
                853/4, Amba Vihar, Muzaffarnagar, U.P, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          All rights reserved.{" "}
          <Link to="#terms" className="text-orange-600 hover:text-orange-800">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="#privacy-policy"
            className="text-orange-600 hover:text-orange-800"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
