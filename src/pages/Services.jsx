import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-green-600 dark:bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-200 dark:text-green-400 font-semibold mb-3">
            Our Services
          </p>

          <h1 className="text-4xl lg:text-6xl font-black text-white mb-5">
            Training built around your goals
          </h1>

          <p className="max-w-2xl mx-auto text-green-100 dark:text-slate-300 text-lg">
            From personal coaching to nutrition and performance training, choose
            the support that fits your fitness journey.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-20 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
              What we offer
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Find the right program for you
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-slate-500 dark:text-slate-400">
              Every program is designed to help you move better, feel stronger,
              and make consistent progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 dark:bg-slate-900 rounded-3xl px-6 py-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Not sure which program is right for you?
            </h2>
            <p className="max-w-2xl mx-auto text-green-100 dark:text-slate-300 mb-8">
              Start with a conversation and we’ll help you find the training
              option that best matches your goals.
            </p>

            <button className="bg-white dark:bg-green-500 text-green-600 dark:text-slate-900 px-7 py-3 rounded-full font-bold cursor-pointer hover:-translate-y-1 transition duration-300">
              Book a Session
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
