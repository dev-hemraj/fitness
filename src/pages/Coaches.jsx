import { Link } from "react-router";
import { coaches } from "../data/coaches";
import CoachCard from "../components/CoachCard";

const Coaches = () => {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Our Team
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Meet Our Coaches
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            Train with experienced coaches who are passionate about helping you
            build strength, improve performance, and achieve lasting results.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coach 1 */}
            {coaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-12 lg:px-14 lg:py-16 text-center">
            <p className="text-green-100 dark:text-slate-900 font-semibold mb-3">
              Start Your Journey
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-5">
              Find the Right Coach for Your Goals
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8 mb-7">
              Tell us what you want to achieve and we’ll help you take the next
              step in your fitness journey.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-white text-green-600 dark:bg-slate-950 dark:text-green-400 px-7 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coaches;
