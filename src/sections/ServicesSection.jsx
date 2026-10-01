import { Link } from "react-router";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="services bg-slate-100 dark:bg-slate-950 dark:border-t-2  dark:border-slate-800  py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="heading text-center mb-8 lg:mb-14 text-3xl lg:text-4xl font-bold dark:text-slate-300">
          Our Services
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {/* Services Card */}

          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/services"
            className="bg-green-600 dark:bg-slate-900 text-white dark:text-slate-400 flex items-center gap-2 rounded-full px-5 font-bold py-3 mt-10 border dark:border-slate-700 cursor-pointer hover:-translate-y-1 transition ease-in-out duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
