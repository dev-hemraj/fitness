import { Link } from "react-router";
import howitWorkImage from "../assets/images/how-work.jpg";
const HowItWorksSection = () => {
  return (
    <section className="bg-white dark:bg-slate-950  dark:border-t-2  dark:border-slate-800 pt-10 lg:pt-20 pb-10 lg:pb-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-20">
        {/* how it work left */}
        <div className="w-full lg:w-1/2">
          <h2 className="heading mb-14 text-3xl lg:text-4xl   dark:text-slate-300 font-bold">
            Your Fitness Journey
          </h2>
          <div className="space-y-10">
            {/* list item  */}
            <div className="flex gap-5 ">
              <h4 className="h-10 w-10 bg-green-500 dark:bg-green-600 text-white dark:text-slate-300 font-bold rounded-full flex items-center justify-center text-lg">
                01
              </h4>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3 dark:text-slate-300">
                  Choose Your Program
                </h3>
                <p className="dark:text-slate-300">
                  Pick from strength, cardio, yoga, or weight-loss plans
                  designed for every fitness level, from beginner to advanced.
                </p>
              </div>
            </div>
            {/* list item  */}
            <div className="flex gap-5 ">
              <h4 className="h-10 w-10 bg-green-500   dark:bg-green-600 text-white dark:text-slate-30 font-bold rounded-full flex items-center justify-center text-lg">
                02
              </h4>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3 dark:text-slate-300">
                  Book Your Session
                </h3>
                <p className="dark:text-slate-300">
                  Select a time that fits your schedule and reserve your spot
                  with a certified trainer in just a few clicks.
                </p>
              </div>
            </div>
            {/* list item  */}
            <div className="flex gap-5 ">
              <h4 className="h-10 w-10 bg-green-500 dark:bg-green-600 text-white dark:text-slate-30 font-bold rounded-full flex items-center justify-center text-lg">
                03
              </h4>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3 dark:text-slate-300">
                  Train & See Results
                </h3>
                <p className="dark:text-slate-300">
                  Show up, sweat it out, and track your progress as you get
                  stronger, fitter, and more confident every week.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* how it work right */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={howitWorkImage}
            alt="Your Fitness Journey"
            className="h-112 object-cover  rounded-2xl"
          />
          {/* absolute  */}
          <div className="absolute bottom-10 right-10">
            <Link
              to="/contact"
              className="bg-green-600 text-white dark:text-slate-900 rounded-full px-5 font-bold py-3 cursor-pointer hover:-translate-y-1 transition ease-in-out duration-300"
            >
              Book session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
