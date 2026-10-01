import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const CoachCard = ({ coach }) => {
  return (
    <article className="group bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={coach.image}
          alt={coach.name}
          className="w-full h-[380px] object-cover object-top group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-green-600 dark:text-green-400 font-semibold text-sm mb-2">
          {coach.role}
        </p>

        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
          {coach.name}
        </h2>

        <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5">
          {coach.description}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-3">
            <a
              href={coach.social.facebook}
              target="_blank"
              aria-label="Facebook"
              className="h-9 w-9 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href={coach.social.instagram}
              target="_blank"
              aria-label="Instagram"
              className="h-9 w-9 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href={coach.social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="h-9 w-9 bg-green-600 text-white dark:text-slate-950 rounded-full flex items-center justify-center hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <Link
            to="/contact"
            className="text-green-600 dark:text-green-400 font-bold hover:underline"
          >
            Book Session
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CoachCard;
