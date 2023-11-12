import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main id="home" className=" text-center container w-full h-screen mx-auto flex md:justify-around items-center bg-none">
      {/* Image Section
      <div className="w-1/2 flex justify-center md:justify-center">
        <img ref={myimageref} className="w-full md:w-1/2" src={img} alt="Pavan MG" />
      </div> */}

      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          I am,<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          NISARG BHARUCHA
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Aspiring Software Engineer
        </h2>
        <br/>
        <div className="flex ">
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


        
      </div>
      
    </main>
  );
}

export default Home;