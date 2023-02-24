import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="dark:text-white text-4xl md:text-7xl mb-1 md:mb-8 font-satisfy">
        Rushabh Patil
      </h1>
      <p class="text-base md:text-xl mb-5 font-medium">
        Aspiring Computer Engineer & Web Developer
      </p>
      <p class="text-sm max-w-xl mb-6 font-bold">
        I'm an aspiring computer engineer, which basically means I'm fluent in several languages that only computers understand. Yes, I speak C, C++, Go, Python, JavaScript and even the elusive Assembly language! But don't worry, I also speak human pretty well.
        <br />
        When I'm not fixing bugs, you can usually find me trying to debug my own life. It's kind of like trying to navigate a maze blindfolded, with no map and no idea where the exit is, but seriously, I'm passionate about using technology to solve real-world problems and make life easier for everyone. And if I can make a few jokes along the way, all the better! 
        <br className/>
        So if you ever need help with your computer, just give me a shout. I promise I won't speak in binary. (Unless you want me to, of course.)
      </p>
    </div>
  );
}

export default Intro;
