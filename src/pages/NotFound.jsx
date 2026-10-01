import { Link } from "react-router";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen flex items-center justify-center px-5 py-16">
      <div className="max-w-3xl w-full text-center">
        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] leading-none font-black text-slate-100 dark:text-slate-900 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-600/20">
              <span className="text-white dark:text-slate-950 text-4xl sm:text-5xl font-black">
                !
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
          Oops! Something went wrong
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
          Page not found
        </h2>

        <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 max-w-xl mx-auto mb-8">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white dark:text-slate-900 px-7 py-3.5 rounded-full font-bold hover:-translate-y-1 transition duration-300"
          >
            <FaHouse />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-7 py-3.5 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-900 hover:-translate-y-1 transition duration-300"
          >
            <FaArrowLeft />
            View Services
          </Link>
        </div>

        {/* Decorative area */}
        <div className="mt-14 max-w-xl mx-auto">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-6 sm:p-8">
            <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">
              Looking for somewhere to start?
            </p>

            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Explore our fitness services and find the right training option
              for your goals.
            </p>

            <Link
              to="/services"
              className="text-green-600 dark:text-green-400 font-bold hover:underline"
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
