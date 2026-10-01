import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-none dark:border dark:border-slate-800 hover:-translate-y-2 transition duration-300">
      <img
        src={service.image}
        alt="Personal fitness coaching"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      {service.isNew && (
        <span className="absolute top-4 right-4 bg-green-600 dark:bg-green-400 text-white dark:text-slate-900  px-3 py-1 rounded-full text-sm font-bold">
          New
        </span>
      )}

      <div className="p-6">
        <span className="inline-block text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
          {service.category}
        </span>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          {service.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">
          {service.description}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold cursor-pointer hover:tracking-wide transition-all"
        >
          Learn More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
