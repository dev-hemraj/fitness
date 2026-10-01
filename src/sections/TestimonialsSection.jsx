import testimonials from "../data/testimonials";
import stats from "../data/stats";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };
  return (
    <section className="bg-green-600 dark:bg-green-900 pt-10 lg:pt-20 pb-10 lg:pb-20 dark:border-t-2  dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* REview Section */}
        <div className="flex items-center flex-col lg:flex-row gap-10">
          {/* Review left */}
          <div className="w-full lg:w-1/3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-2xl shadow-2xl border border-white/50 dark:border-green-600 h-[350px] w-full object-cover object-top"
            />
          </div>
          {/* Review Right */}
          <div className="w-full lg:w-2/3 bg-white dark:bg-slate-950 rounded-2xl px-6 py-8 shadow-2xl relative">
            {/* Review Count */}
            <p className="bg-green-600 dark:bg-green-500 text-white dark:text-slate-800 font-bold absolute right-5 top-0 shadow-md shadow-green-300  px-4 py-2 text-lg rounded-b-2xl">
              {currentIndex + 1} / {testimonials.length}
            </p>
            {/* Stars */}
            <div className="mb-5">
              <ul className="flex gap-2 items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="text-yellow-500 text-lg">
                    {index < testimonial.rating ? <FaStar /> : <CiStar />}
                  </li>
                ))}
              </ul>
            </div>
            {/* Reviwe Text */}
            <p className="text-lg font-medium dark:text-slate-300">
              {testimonial.review}
            </p>
            {/* User Info */}
            <div className="mt-10">
              <h5 className="font-bold text-lg text-green-700">
                {testimonial.name}
              </h5>
              <p className="dark:text-slate-300">{testimonial.role}</p>
              {/* Goal , outcome */}
              <div className="mt-10">
                <p className="dark:text-slate-300">
                  <span className="font-bold text-green-800 ">Goal:</span>
                  {testimonial.goal}
                </p>
                <p className="dark:text-slate-300">
                  <span className="font-bold text-green-800">Outcome:</span>
                  {testimonial.outcome}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute -bottom-15 lg:bottom-20 right-0 lg:right-20 dark:bg-slate-950 lg:dark:bg-transparent  p-5 lg:p-0 rounded-t-0 rounded-b-xl lg:rounded-b-0">
              <div className="flex gap-5">
                <div
                  onClick={handlePrevious}
                  className="h-10 w-10  hover:-translate-y-1 transition-all ease-in-out duration-300 bg-green-600 text-white text-2xl rounded-full cursor-pointer flex justify-center items-center "
                >
                  <IoIosArrowBack />
                </div>
                <div
                  onClick={handleNext}
                  className="h-10 w-10 hover:-translate-y-1 cursor-pointer transition-all ease-in-out duration-300 bg-green-600 text-white text-2xl rounded-full flex justify-center items-center"
                >
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats  Section */}
        <div className="pt-25 lg:pt-20">
          <div className="grid lg:grid-cols-3  items-center text-center space-y-8 lg:space-y-0">
            {/* State card */}
            {stats.map((stat) => (
              <div className="text-center" key={stat.id}>
                <h3 className="text-white dark:text-slate-300 text-3xl lg:text-5xl font-bold py-2 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-sm text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
