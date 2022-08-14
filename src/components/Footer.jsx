import React from 'react';
import { FaTwitter, FaReddit, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      <footer
        className={`p-4
      ${
        pathname === '/battle' ? 'bg-mainred' : 'bg-mainblue'
      }      bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800`}
      >
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <br className="inline-block " />
          <span className="hover:underline">
            Copyrights are reserved &copy;2022
          </span>
          <br className="inline-block " />
          <span> Coded by Ahmed Maher</span>
        </span>

        <ul
          id="footer-links"
          className="flex flex-wrap gap-4 items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-2 "
        >
          <li>
            <a href="https://twitter.com/A_maher_938">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/user/ahmedmaher2481998">
              <FaReddit />
            </a>
          </li>
          <li>
            <a href="https://github.com/ahmedmaher2481998">
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
