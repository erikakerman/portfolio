import { useState } from "react";

function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Create a link element
    const link = document.createElement("a");
    link.href = "/Erik_Akerman_Resume.pdf";
    link.download = "Erik_Akerman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset the button state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl font-bold mb-2">Hi, I am Erik,</h1>
            <h2 className="text-3xl text-gray-600 mb-4">
              Creative Technologist
            </h2>
            <p className="text-lg mb-6 max-w-xl">
              I am a passionate web developer specializing in React and
              JavaScript. With a keen eye for design and a love for clean code,
              I create responsive and user-friendly web applications that solve
              real-world problems.
            </p>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 ${
                isDownloading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/profile-picture.jpg"
              alt="Erik Åkerman"
              className="rounded-full w-48 md:w-64 h-48 md:h-64 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/250";
                console.log("Error loading image: ", e.target.src);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
