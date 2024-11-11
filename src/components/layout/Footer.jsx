import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaFacebookF className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaLinkedinIn className="h-6 w-6" />
        </a>
      </div>
      <p className="text-center text-gray-400 mt-4">
        © 2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
