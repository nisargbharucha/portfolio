import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main  className="w-full h-screen container mx-auto max-width section">
      <h1 id="contact" className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Get in touch with me. 
      </h1>
      
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}></a>
      </h3>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>NISARGBHARUCHA@GMAIL.COM</a>
      </h3>
      <div className="flex justify-center">
          <a href="https://github.com/nisargbharucha" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/nisargbharucha/AboutMe/master/assets/img/github-desktop.256x256%20(1).png" alt="GitHub" className="pr-2" />
          </a>
          <a href="www.linkedin.com/in/nisarg-bharucha" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/nisargbharucha/AboutMe/master/assets/img/linkedin.256x256%20(1).png" alt="LinkedIn" className="pr-2" />
          </a>
          <a href="https://instagram.com/nisargbharucha" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/nisargbharucha/AboutMe/master/assets/img/instagram.256x256%20(1)%20(1).png" alt="Instagram" className="pr-2" />
          </a>
          <a href="mailto:nisargbharucha@gmail.com">
            <img src="https://raw.githubusercontent.com/nisargbharucha/AboutMe/master/assets/img/gmail.254x256%20(1).png" alt="Gmail" className="pr-2" />
          </a>
        </div>
    </main>
  );
}

export default Contact;
