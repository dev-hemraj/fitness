import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import fitnessVideo from "../assets/videos/fitness-video.mp4";
const VideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  //  Automatically pause the video when the user scrolls away from this section.
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-full h-[650px] bg-white dark:bg-slate-950 overflow-hidden relative dark:border-t-2 dark:border-slate-800"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={fitnessVideo}
        playsInline
        // poster={ctaImage}
        muted
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>

      {/* Play Area */}
      <div className="absolute bottom-10 right-5 sm:bottom-14 sm:right-10 lg:bottom-20 lg:right-20">
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={handleVideoToggle}
            aria-label="Play video"
            className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-green-600 flex items-center justify-center cursor-pointer hover:scale-105 transition duration-300"
          >
            {isPlaying ? (
              <FaPause className="text-white dark:text-slate-900 text-2xl lg:text-4xl ml-1" />
            ) : (
              <FaPlay className="text-white dark:text-slate-900 text-2xl lg:text-4xl ml-1" />
            )}
          </button>

          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
            Explore <br /> the vision
          </h4>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
