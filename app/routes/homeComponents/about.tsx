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
        I specialize in JavaScript, React, and Node.js, and I enjoy working on
        projects that challenge my skills and allow me to learn new
        technologies. My goal is to continuously improve my craft and contribute
        to innovative projects that make a difference.
      </p>
      <p className="text-lg text-center sm:text-left">
        Feel free to explore my projects and connect with me through the links
        below!
      </p>
    </div>
  );
}
