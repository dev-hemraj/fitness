import { Link } from "react-router";
import {
  FaArrowLeft,
  FaCalendarDays,
  FaClock,
  FaDumbbell,
  FaFire,
  FaCheck,
} from "react-icons/fa6";

import challengeImage from "../assets/images/trainer-1.jpg";

const ChallengeDetail = () => {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-slate-100 dark:bg-slate-900 py-5">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>

            {" / "}

            <Link to="/challenges" className="hover:text-green-600">
              Challenges
            </Link>

            {" / "}

            <span className="text-slate-700 dark:text-slate-300">
              30-Day Strength Challenge
            </span>
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <img
              src={challengeImage}
              alt="30 Day Strength Challenge"
              className="w-full h-[450px] lg:h-[580px] object-cover object-top rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="bg-green-100 dark:bg-green-600/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-sm font-bold">
                Strength
              </span>

              <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full text-sm font-bold">
                Beginner
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
              30-Day Strength Challenge
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-7">
              Build a stronger foundation with progressive full-body workouts
              designed to improve strength, confidence, and consistency over 30
              days.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-4">
                <FaCalendarDays className="text-green-600 dark:text-green-400 mb-3" />

                <p className="font-black text-slate-900 dark:text-slate-100">
                  30 Days
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Duration
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-4">
                <FaClock className="text-green-600 dark:text-green-400 mb-3" />

                <p className="font-black text-slate-900 dark:text-slate-100">
                  4 Days
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Per Week
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-4">
                <FaFire className="text-green-600 dark:text-green-400 mb-3" />

                <p className="font-black text-slate-900 dark:text-slate-100">
                  Beginner
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Level
                </p>
              </div>
            </div>

            <button
              type="button"
              className="bg-green-600 text-white dark:text-slate-950 rounded-full px-7 py-3.5 font-bold hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              Start Challenge
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              About the Challenge
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-5">
              Build Strength One Week at a Time
            </h2>

            <p className="text-slate-500 dark:text-slate-400 leading-8 mb-5">
              This challenge is designed for anyone who wants to build a solid
              strength-training routine without making things overly
              complicated.
            </p>

            <p className="text-slate-500 dark:text-slate-400 leading-8">
              Each week gradually increases training volume and difficulty so
              you can make progress while still allowing time for recovery.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-3xl p-7">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-5">
              What You&apos;ll Need
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-sm">
                  <FaCheck />
                </span>
                Dumbbells
              </li>

              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-sm">
                  <FaCheck />
                </span>
                Exercise mat
              </li>

              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-sm">
                  <FaCheck />
                </span>
                Bench or stable surface
              </li>

              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-sm">
                  <FaCheck />
                </span>
                Water bottle
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Weekly Plan */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              Challenge Schedule
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">
              Your 4-Week Plan
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-7">
              Each week builds on the previous one with a simple and consistent
              training structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Week 1 */}
            <article className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center font-black">
                  1
                </div>

                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Week 1
                  </p>

                  <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Build the Foundation
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 1
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Upper Body
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 2
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Lower Body
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 3
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Rest
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 4
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Full Body
                  </span>
                </div>
              </div>
            </article>

            {/* Week 2 */}
            <article className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center font-black">
                  2
                </div>

                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Week 2
                  </p>

                  <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Build Consistency
                  </h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 1
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    Upper Body Strength
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 2
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    Lower Body Strength
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 3
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    Core & Mobility
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4 flex justify-between gap-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    Day 4
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    Full Body Strength
                  </span>
                </div>
              </div>
            </article>

            {/* Week 3 */}
            <article className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center font-black">
                  3
                </div>

                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Week 3
                  </p>

                  <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Increase the Challenge
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Upper Body Progression
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Lower Body Progression
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Core Conditioning
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Full Body Circuit
                </div>
              </div>
            </article>

            {/* Week 4 */}
            <article className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center font-black">
                  4
                </div>

                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Week 4
                  </p>

                  <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Finish Strong
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Upper Body Challenge
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Lower Body Challenge
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Core & Recovery
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-xl p-4">
                  Final Full Body Workout
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Progress Preview */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white dark:bg-slate-950 rounded-3xl p-7 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">
              <div>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                  Your Progress
                </p>

                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100">
                  Challenge Progress
                </h2>
              </div>

              <p className="text-3xl font-black text-green-600 dark:text-green-400">
                0%
              </p>
            </div>

            <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-green-600 rounded-full"></div>
            </div>

            <p className="text-slate-500 dark:text-slate-400 mt-4">
              Start the challenge and your completed workouts will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-12 lg:px-14 lg:py-16 text-center">
            <FaDumbbell className="text-white dark:text-slate-950 text-4xl mx-auto mb-5" />

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-5">
              Ready to Take the Challenge?
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8 mb-7">
              Start with the first workout and focus on making steady progress
              one session at a time.
            </p>

            <button
              type="button"
              className="bg-white text-green-700 dark:bg-slate-950 dark:text-green-400 px-7 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
            >
              Start Challenge
            </button>

            <div className="mt-6">
              <Link
                to="/challenges"
                className="inline-flex items-center gap-2 text-white dark:text-slate-950 font-bold"
              >
                <FaArrowLeft />
                Back to Challenges
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChallengeDetail;
