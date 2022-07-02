import React from "react";

const Hero = () => {
  return (
    <div id="here" className="flex items-center justify-center">
    <div className="flex-1 p-4 rounded-lg shadow-xl max-w-3xl sm:p-8">
        <div className="aspect-w-16 aspect-h-7">
          <iframe
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/M1LDg0RLR-s"
          title="YouTube video
        player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Hero;
