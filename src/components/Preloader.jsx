import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        // Simulate realistic loading with varying speeds
        const increment = Math.random() * 8 + 2; // Random increment between 2-10
        return Math.min(prevProgress + increment, 100);
      });
    }, 150); // Slightly slower for more realistic feel

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 preloader-bg flex flex-col items-center justify-center min-h-screen ${
        isFading ? "preloader-fade-out" : ""
      }`}
    >
      <div className="preloader-content">
        {/* Nakpro Logo */}
        <div className="mb-8">
          <img
            src="/images/nakpro-logo.png"
            alt="Nakpro"
            className="w-32 h-auto preloader-logo"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          {/* Progress Bar */}
          <div
            className="h-full bg-mid-brown transition-all duration-300 ease-out rounded-full preloader-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Text */}
        <div className="mt-4 text-2xl font-bold text-dark-brown">
          {Math.round(progress)}%
        </div>

        {/* Loading Text */}
        <div className="mt-2 text-lg text-mid-brown font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Preloader;
