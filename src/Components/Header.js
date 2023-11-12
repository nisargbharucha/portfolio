import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-center py-5 max-width">
      <nav className={`${!isOpen ? "hidden" : null} text-center md:flex md:items-center justify-center`}>
        <ul className="dark:text-light-content font-medium md:flex items-center justify-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <a href="#home" onClick={toggleClass}>
              Home
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a href="#about" onClick={toggleClass}>
              About
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a href="#skill" onClick={toggleClass}>
              Skills
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a href="#projects" onClick={toggleClass}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleClass}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
