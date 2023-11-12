import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    php,
    dart,
    vscode,
    python,
    git,
    github,
    kotlin,
    mongo,
    figma,
    azure,
    mysql,
    aws,
    nodejs,
    docker,
    googleCloud,
    java
  } = techStackDetails;
  return (
    <main id="technologies" className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Skills
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Langugaes and cloud services that I have worked with before
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
  
  <img src={python} title="Python" alt="Python" />
  <img src={java} title="AWS" alt="AWS" />
  <img src={mysql} title="MySQL" alt="MySQL" />
  <img src={mongo} title="MongoDB" alt="MongoDB" />
  
  <img src={dart} title="Dart" alt="Dart" />
  <img src={kotlin} title="Kotlin" alt="Kotlin" />
  <img src={html} title="HTML" alt="HTML" />
  
  <img src={css} title="CSS" alt="CSS" />
  <img src={js} title="JavaScript" alt="JavaScript" />
  <img src={react} title="React" alt="React" />
  <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
  <img src={php} title="PHP" alt="Php" />
  
  <img src={aws} title="AWS" alt="AWS" />
  <img src={azure} title="azure" alt="azure" />
  <img src={googleCloud} title="AWS" alt="AWS" />
</section>

<section>
  <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
    Tools
  </h1>
</section>

<section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
  <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
  <img src={git} title="Git" alt="Git" />
  <img src={github} title="Github" alt="GitHub" />
  <img src={figma} title="Figma" alt="Figma" />
  {/* ... other tool images ... */}
  <img src={nodejs} title="Node.js" alt="Node.js" />
  <img src={docker} title="Docker" alt="Docker" />
  {/* ... include additional tools as needed ... */}
</section>

    </main>
  );
}

export default Technologies;
