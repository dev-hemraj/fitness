import { Link } from "react-router";
import {
  FaBolt,
  FaDumbbell,
  FaFire,
  FaPersonWalking,
  FaClock,
  FaChartLine,
} from "react-icons/fa6";

import challenge1 from "../assets/images/trainer-1.jpg";
import challenge2 from "../assets/images/trainer-2.jpg";
import challenge3 from "../assets/images/trainer-3.jpg";
import challenge4 from "../assets/images/trainer-4.jpg";
import challenge5 from "../assets/images/trainer-5.jpg";
import challenge6 from "../assets/images/trainer-4.jpg";

const Challenges = () => {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Push Your Limits
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Fitness Challenges
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            Choose a challenge, stay consistent, and build momentum with
            structured workouts designed around clear goals.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="h-14 w-14 bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-2xl mb-5">
                <FaBolt />
              </div>

              <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Choose Your Goal
              </h2>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Pick a challenge based on strength, endurance, mobility, or
                overall fitness.
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="h-14 w-14 bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-2xl mb-5">
                <FaClock />
              </div>

              <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Follow the Plan
              </h2>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Stay consistent with a simple schedule and manageable weekly
                training targets.
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
              <div className="h-14 w-14 bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-2xl mb-5">
                <FaChartLine />
              </div>

              <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Track Your Progress
              </h2>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Build momentum by completing sessions and seeing your progress
                over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              Choose Your Challenge
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">
              Find a Challenge That Fits You
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-7">
              Start with something manageable or push yourself with a more
              advanced program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge1}
                  alt="30 day strength challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    Strength
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Beginner
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  30-Day Strength Challenge
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Build a stronger foundation with progressive full-body
                  workouts over 30 days.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>30 Days</span>
                  <span>4 Days / Week</span>
                </div>

                <Link
                  to="/challenge-detail"
                  className="flex  justify-center w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </Link>
              </div>
            </article>

            {/* Challenge 2 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge2}
                  alt="HIIT challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    HIIT
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Intermediate
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  21-Day HIIT Challenge
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Improve conditioning and endurance with short, high-intensity
                  training sessions.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>21 Days</span>
                  <span>5 Days / Week</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </button>
              </div>
            </article>

            {/* Challenge 3 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge3}
                  alt="mobility challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    Mobility
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Beginner
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  14-Day Mobility Reset
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Improve flexibility and movement quality with short daily
                  mobility sessions.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>14 Days</span>
                  <span>Daily</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </button>
              </div>
            </article>

            {/* Challenge 4 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge4}
                  alt="fat loss challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    Fat Loss
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Intermediate
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  28-Day Fat Loss Challenge
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Combine resistance training and conditioning to build a
                  consistent fat-loss routine.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>28 Days</span>
                  <span>5 Days / Week</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </button>
              </div>
            </article>

            {/* Challenge 5 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge5}
                  alt="core challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    Core
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Beginner
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  21-Day Core Challenge
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Develop core strength and stability with simple progressive
                  workouts.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>21 Days</span>
                  <span>4 Days / Week</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </button>
              </div>
            </article>

            {/* Challenge 6 */}
            <article className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={challenge6}
                  alt="advanced fitness challenge"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                    Performance
                  </span>

                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    Advanced
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
                  30-Day Performance Challenge
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
                  Push strength, conditioning, and work capacity with advanced
                  training sessions.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span>30 Days</span>
                  <span>5 Days / Week</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full py-3 font-bold hover:-translate-y-1 transition duration-300"
                >
                  View Challenge
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                Stay Consistent
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-5">
                Small Steps Build Big Results
              </h2>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-5">
                Challenges are designed to give you a clear target and a simple
                structure to follow. The goal is not perfection. It&apos;s
                building consistency.
              </p>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-8">
                Start at the right difficulty, follow the plan, and focus on
                completing one session at a time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
                <FaDumbbell className="text-green-600 dark:text-green-400 text-3xl mb-5" />

                <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                  6
                </p>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Challenges
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
                <FaFire className="text-green-600 dark:text-green-400 text-3xl mb-5" />

                <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                  3
                </p>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Difficulty Levels
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
                <FaPersonWalking className="text-green-600 dark:text-green-400 text-3xl mb-5" />

                <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                  14+
                </p>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Training Days
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
                <FaChartLine className="text-green-600 dark:text-green-400 text-3xl mb-5" />

                <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                  100%
                </p>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Focus on Progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              Questions
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100">
              Challenge FAQ
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-950 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2">
                Can beginners join a challenge?
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Yes. Choose a challenge marked Beginner and adjust exercises to
                match your current fitness level.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2">
                Do I need gym equipment?
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Equipment needs depend on the challenge. Some can be completed
                with minimal or no equipment.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 dark:text-slate-100 mb-2">
                What happens if I miss a day?
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Continue from where you left off. Consistency over time matters
                more than completing every session perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-12 lg:px-14 lg:py-16 text-center">
            <p className="text-green-100 dark:text-slate-900 font-semibold mb-3">
              Ready for a Challenge?
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-5">
              Choose Your Goal and Get Moving
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8 mb-7">
              Pick a challenge that matches your fitness level and start
              building consistent progress.
            </p>

            <Link
              to="/contact"
              className="inline-flex justify-center bg-white text-green-700 dark:bg-slate-950 dark:text-green-400 px-7 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
            >
              Talk to a Coach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Challenges;
