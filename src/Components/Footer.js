import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        This website is hosted with AWS{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
        </a>
      </p>
    </footer>
  );
}
export default Footer;
