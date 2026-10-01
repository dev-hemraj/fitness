import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { coaches } from "../data/coaches";

const CoachSection = () => {
  const featuredCoach = coaches[5] || coaches[0];
  return (
    <section className="bg-white dark:bg-slate-950 dark:border-t dark:border-slate-800 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Coach Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={featuredCoach.image}
                alt={featuredCoach.name}
                className="w-full h-100 lg:h-145 object-cover object-top"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Coach Info Card */}
            <div className="absolute left-5 right-5 lg:left-8 lg:right-8 bottom-5 lg:bottom-8 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-xl">
              <p className="text-slate-500 dark:text-slate-400 leading-7 mb-3">
                {featuredCoach.description}
              </p>

              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                  {featuredCoach.name}
                </h3>

                <p className="text-green-600 dark:text-green-400 font-semibold">
                  {featuredCoach.role}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              Expert Coaching
            </p>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6">
              Meet the Coaches Behind Your Progress
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-5">
              Our coaches are here to help you train smarter, stay consistent,
              and build a fitness routine that works around your goals and
              lifestyle.
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-7">
              From strength and conditioning to mobility, personal training, and
              high-intensity workouts, our team brings different areas of
              experience to support every stage of your fitness journey.
            </p>

            <Link
              to="/coaches"
              className="inline-flex bg-green-600 text-white dark:text-slate-900 rounded-full px-6 py-3 font-bold hover:-translate-y-1 transition duration-300"
            >
              Meet All Coaches
            </Link>

            {/* Social Links */}
            <div className="mt-10 lg:mt-14">
              <p className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-4">
                Follow {featuredCoach.name}
              </p>

              <ul className="flex gap-4">
                <li>
                  <a
                    href={featuredCoach.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${featuredCoach.name} Facebook`}
                    className="h-11 w-11 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center text-lg hover:-translate-y-1 transition duration-300"
                  >
                    <FaFacebookF />
                  </a>
                </li>

                <li>
                  <a
                    href={featuredCoach.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${featuredCoach.name} Instagram`}
                    className="h-11 w-11 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center text-lg hover:-translate-y-1 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a
                    href={featuredCoach.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${featuredCoach.name} LinkedIn`}
                    className="h-11 w-11 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center text-lg hover:-translate-y-1 transition duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>

            {/* Small Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <p className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100">
                  {featuredCoach.stats.experience}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100">
                  {featuredCoach.stats.clients}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Clients Trained
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100">
                  {featuredCoach.stats.gyms}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Gyms Worked With
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
