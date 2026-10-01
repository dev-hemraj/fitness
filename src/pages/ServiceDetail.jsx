import { Link, useParams } from "react-router";
import { services } from "../data/services";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    return <NotFound />;
  }

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

            <Link to="/services" className="hover:text-green-600">
              Services
            </Link>

            {" / "}

            <span className="text-slate-700 dark:text-slate-300">
              {service.title}
            </span>
          </p>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              {service.category}
            </p>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
              {service.title}
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-6">
              {service.description}
            </p>

            <Link
              to="/contact"
              className="bg-green-600 text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            What you’ll get
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <div
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl"
                key={benefit.title}
              >
                <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
