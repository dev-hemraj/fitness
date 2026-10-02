import { NavLink } from "react-router";
import { navLinks } from "../data/navLinks";
import { contactInfo } from "../data/contactInfo";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white dark:border-t-2  dark:border-slate-800 ">
      <div className="max-w-7xl mx-auto px-5   py-10 lg:py-20">
        <div className=" grid lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-green-500">FitZone</h2>
            <p className="text-gray-400 mt-5 leading-7">
              Build strength, improve your health, and create a lifestyle that
              keeps you moving forward.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-xl mb-5 dark:text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  {!navLink.subMenu && (
                    <NavLink to={navLink.path}>{navLink.name}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-5 dark:text-slate-300">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: {contactInfo.email}</li>
              <li>Phone: {contactInfo.phone}</li>
              <li>Location: {contactInfo.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5 border-t-2 border-slate-800">
        <div className=" text-slate-300 max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <p>© 2026 FitZone. All rights reserved.</p>

            <div className="flex gap-6">
              <button className="hover:text-green-500 transition">
                Privacy Policy
              </button>

              <button className="hover:text-green-500 transition">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
