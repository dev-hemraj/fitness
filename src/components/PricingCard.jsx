import { useState } from "react";
import { Link } from "react-router";

const PricingCard = ({ price, billingPeriod }) => {
  const Icon = price.icon;
  const isFeatured = price.featured;

  return (
    <article
      className={`relative rounded-3xl p-7 lg:p-8 ${
        isFeatured
          ? "bg-green-600 dark:bg-green-700 shadow-xl lg:-translate-y-4"
          : "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
      }`}
    >
      {/* Most Popular */}
      {isFeatured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-4 py-2 rounded-full text-sm font-bold">
          Most Popular
        </span>
      )}

      <div className="mb-7">
        <div className="flex items-center justify-between gap-4 mb-5">
          {/* Icon */}
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center text-xl ${
              isFeatured
                ? "bg-white/20 text-white dark:text-slate-100"
                : "bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400"
            }`}
          >
            <Icon />
          </div>

          {/* Badge */}
          <span
            className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ${
              isFeatured
                ? "bg-white/15 text-white"
                : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300"
            }`}
          >
            {price.badge}
          </span>
        </div>

        {/* Name */}
        <h3
          className={`text-2xl font-black mb-3 ${
            isFeatured ? "text-white" : "text-slate-900 dark:text-slate-100"
          }`}
        >
          {price.name}
        </h3>

        {/* Description */}
        <p
          className={`leading-7 ${
            isFeatured ? "text-green-50" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {price.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-7">
        <div className="flex items-end gap-1">
          <span
            className={`text-4xl lg:text-5xl font-black ${
              isFeatured ? "text-white" : "text-slate-900 dark:text-slate-100"
            }`}
          >
            ${price.price[billingPeriod]}
          </span>

          <span
            className={`mb-1 ${
              isFeatured
                ? "text-green-100"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            /month
          </span>
        </div>
      </div>

      {/* Button */}

      <Link
        to="/contact"
        className={`flex justify-center w-full rounded-full px-5 py-3 font-bold hover:-translate-y-1 transition duration-300 ${
          isFeatured
            ? "bg-white text-green-700 dark:bg-slate-950 dark:text-green-400"
            : "bg-green-600 text-white dark:text-slate-950"
        }`}
      >
        Get Started
      </Link>

      {/* Features */}
      <div className="mt-8">
        <p
          className={`font-bold mb-5 ${
            isFeatured ? "text-white" : "text-slate-900 dark:text-slate-100"
          }`}
        >
          What's included
        </p>

        <ul
          className={`space-y-4 ${
            isFeatured ? "text-green-50" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {price.features.map((feature) => (
            <li key={feature} className="list-disc list-inside">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PricingCard;
