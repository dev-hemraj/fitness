import { Link } from "react-router";
import { FaDumbbell, FaHeartPulse, FaPeopleGroup } from "react-icons/fa6";
import aboutImage from "../assets/images/group-sessions.jpg";

const About = () => {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            About ReactFit
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Fitness Built Around Real Progress
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            We help people build stronger bodies, healthier habits, and lasting
            confidence through practical coaching and personalized training.
          </p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="ReactFit training"
              className="w-full h-[420px] lg:h-[560px] object-cover object-center rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-2xl p-5 shadow-lg">
              <p className="text-green-600 dark:text-green-400 font-bold text-xl mb-1">
                Stronger Every Day
              </p>

              <p className="text-slate-500 dark:text-slate-400">
                Training that fits your goals, experience, and lifestyle.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-6">
              More Than Workouts. A Better Way to Train.
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-5">
              ReactFit was created to make fitness coaching more practical,
              personal, and sustainable. We believe good training should help
              you improve without making your life more complicated.
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-7">
              Whether you&apos;re beginning your fitness journey or working
              toward a new performance goal, our approach combines structure,
              support, and consistency to help you keep moving forward.
            </p>

            <Link
              to="/coaches"
              className="inline-flex bg-green-600 text-white dark:text-slate-950 rounded-full px-6 py-3 font-bold hover:-translate-y-1 transition duration-300"
            >
              Meet Our Coaches
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              What We Believe
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">
              Our Approach to Fitness
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-7">
              Our coaching is built around simple principles that help people
              train better and stay consistent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <article className="bg-white dark:bg-slate-950 rounded-3xl p-7">
              <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl mb-5">
                <FaDumbbell />
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Train With Purpose
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Every session should have a clear purpose and move you closer to
                your goals.
              </p>
            </article>

            {/* Value 2 */}
            <article className="bg-white dark:bg-slate-950 rounded-3xl p-7">
              <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl mb-5">
                <FaHeartPulse />
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Build Healthy Habits
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Long-term results come from habits that are realistic,
                repeatable, and sustainable.
              </p>
            </article>

            {/* Value 3 */}
            <article className="bg-white dark:bg-slate-950 rounded-3xl p-7">
              <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl mb-5">
                <FaPeopleGroup />
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3">
                Support Every Step
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7">
                Coaching should provide guidance, accountability, and support
                through every stage of progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-green-600 dark:text-green-400">
                6+
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Expert Coaches
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-green-600 dark:text-green-400">
                500+
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Clients Trained
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-green-600 dark:text-green-400">
                12+
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Training Programs
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-green-600 dark:text-green-400">
                10+
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Our Mission
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-6">
            Helping People Build Fitness That Lasts
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 max-w-3xl mx-auto">
            Our mission is to make professional fitness coaching approachable
            and effective by giving people the structure, knowledge, and support
            they need to create meaningful long-term change.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-12 lg:px-14 lg:py-16 text-center">
            <p className="text-green-100 dark:text-slate-900 font-semibold mb-3">
              Ready to Begin?
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-5">
              Start Building a Stronger Version of You
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8 mb-7">
              Explore our coaching options or speak with our team to find the
              right path for your fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex justify-center bg-white text-green-700 dark:bg-slate-950 dark:text-green-400 px-7 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="inline-flex justify-center border border-white text-white dark:border-slate-950 dark:text-slate-950 px-7 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
