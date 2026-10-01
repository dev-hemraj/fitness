import { IoMdFitness } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";
import trainer from "../assets/images/trainer.jpg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="hero bg-white dark:bg-slate-950 pt-10 lg:pt-20 pb-10 lg:pb-20">
      <div className="max-w-7xl px-5 mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
        {/* Hero Left Part*/}
        <div className="w-full lg:w-1/2 ">
          <div>
            <p className="flex items-center gap-3 text-green-600 dark:text-green-400 font-bold text-sm">
              <IoMdFitness className="text-lg" /> Transform your body and
              lifestyle with expert guidance
            </p>
            <h1 className="text-4xl lg:text-6xl font-black text-green-600 dark:text-green-400 mt-6">
              Build a stronger healthier you
            </h1>
            <p className="mt-4 mb-4 text-slate-400 font-medium">
              Personalized fitness coaching designed to help you build strength,
              improve health, and achieve your goals.
            </p>

            <Link
              to="/pricing"
              className="bg-green-600 dark:bg-green-400 text-white dark:text-slate-900 inline-block rounded-full px-5 font-bold py-3 cursor-pointer hover:-translate-y-1 transition ease-in-out duration-300"
            >
              Start Your Journey
            </Link>
          </div>
          <div className=" mt-10 lg:mt-20 flex items-center gap-6">
            <div>
              <FaAward className="text-5xl text-green-600" />
            </div>
            <div>
              <p className="text-slate-500 font-medium">
                Certified fitness coach
              </p>
              <p className="text-black dark:text-slate-300 font-bold text-lg">
                Personalized training for your goals
              </p>
            </div>
          </div>
        </div>
        {/* Hero Right Part */}
        <div className="w-full lg:w-1/2 rounded-2xl  min-h-75 relative  ">
          <img
            src={heroImage}
            alt="Fitness coaching"
            className="w-full h-115 object-cover object-top rounded-2xl shadow-sm shadow-green-100"
          />
          {/* Absolute Card */}
          <div className="absolute  shadow-2xl bottom-10 right-10 w-58 min-h-70 bg-white dark:bg-slate-950  rounded-2xl flex justify-center items-center">
            <div className="text-center">
              <img
                src={trainer}
                alt="Personal fitness trainer"
                className="h-20 w-20 rounded-full object-cover object-top mx-auto"
              />
              <p className="font-bold mt-3 dark:text-slate-300">Alexa Doe</p>
              <p className="dark:text-slate-300">Fitness Coach</p>
              <Link
                to="/contact"
                className="bg-green-600 dark:bg-green-400 px-5 py-2 text-white dark:text-slate-900 cursor-pointer rounded-full font-bold mt-3  inline-block hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                Book a session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
