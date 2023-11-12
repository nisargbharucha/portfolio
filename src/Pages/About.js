import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="w-full h-screen text-center container mx-auto max-width pt-10 pb-20 bg-none ">
      <section id="about">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        
        <p className="text-center text-content py-10 ">Aspiring software engineer currently in the third year of my academic journey, actively seeking new opportunities to further my skills and knowledge.  Take a closer look at my detailed resume below.  I welcome any constructive feedback and am eager 
          to explore opportunities that foster growth and continuous learning.</p>
      </section>
      <a href="https://drive.google.com/file/d/1zz2jan-1HWfRCJr7XVXP9Y3KvIKTA3EZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button class="bg-purple-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
    </svg>
    <span>Download</span>
  </button>
</a>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      
      
    </main>
  );
}

export default About;
