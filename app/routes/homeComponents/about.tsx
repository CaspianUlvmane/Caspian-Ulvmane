export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl text-center font-bold mb-6">About Me</h1>
      <div className="w-32 h-32 rounded-full overflow-hidden flex items-start justify-center mb-4 shadow shadow-purple-950 backdrop-blur-[1px]">
        <img
          src="caspian_portrait.png"
          alt="Profile"
          className="max-w-[200px] aspect-square h-35"
        ></img>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Caspian Ulvmåne</h2>
      <p className="text-lg mb-4 text-center sm:text-left">
        I am a passionate web developer with a focus on creating dynamic and
        user-friendly web applications. My journey in web development has been
        driven by a love for coding and a desire to build impactful digital
        experiences.
      </p>
      <p className="text-lg mb-4 text-center sm:text-left">
        I'm a Dynamic fullstack developer who is adept at creating scalable web
        applications that enhance user engagement. I'm proficient in modern
        technologies such as React, Symfony, and Firebase, with a strong
        foundation in both frontend and backend development. I'm always
        committed to delivering high-quality solutions through collaboration and
        agile methodologies, while continuously developing my skills to meet
        emerging challenges.
      </p>
      <p className="text-lg mb-4 text-center sm:text-left">
        I specialize in JavaScript/TypeSript frameworks, and I enjoy working on
        projects that challenge my skills and allow me to learn new
        technologies. My goal is to continuously improve my craft and contribute
        to innovative projects that make a difference.
      </p>
      <p className="text-lg mb-4 text-center sm:text-left">
        During my education I've had the opportunity to learn about graphic
        design, business development and marketing as well as programming. I
        enjoy combining my many interests such as design, film making and music
        with my technological skills to create products that create real value.
      </p>
      <p className="text-lg text-center sm:text-left mb-4">
        I'm located in Malmö Sweden with a degree from Malmö University in
        Mediatechnology. Feel free to explore some of my projects or if you want
        to take a coffee with me or have a chat over Zoom you can reach me
        through the links below!
      </p>
      <a
        href="emailto:caspianulvmane@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-foreground hover:underline self-baseline mb-2"
      >
        caspianulvmane@gmail.com
      </a>
      <a
        href="tel:+46764700615"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-foreground hover:underline self-baseline mb-2"
      >
        +46 764 70 06 15
      </a>
      <a
        href="https://github.com/CaspianUlvmane"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-foreground hover:underline self-baseline"
      >
        GitHub
      </a>
    </div>
  );
}
