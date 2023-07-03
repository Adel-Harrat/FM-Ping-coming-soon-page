import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const iconStyle =
    "border border-gray/25 rounded-full w-10 h-10 grid place-items-center hover:bg-blue group transition duration-300";
  const iconStyle2 = "text-blue group-hover:text-white transition duration-500";

  return (
    <footer className="text-center mt-24">
      {/* icons goes here */}
      <div className="flex items-center justify-center space-x-6">
        <a href="#" className={iconStyle}>
          <FaFacebookF className={iconStyle2} />
        </a>

        <a href="#" className={iconStyle}>
          <FaTwitter className={iconStyle2} />
        </a>

        <a href="#" className={iconStyle}>
          <FaInstagram className={iconStyle2} />
        </a>
      </div>

      {/* Copyright goes here */}
      <p className="text-sm text-gray mt-10 mb-10">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
