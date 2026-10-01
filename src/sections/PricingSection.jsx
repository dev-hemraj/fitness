import { pricingPlans } from "../data/pricing.js";
import PricingCard from "../components/PricingCard";
import { useEffect, useState } from "react";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const toggleBase =
    "cursor-pointer px-6 py-2.5 rounded-full font-bold transition duration-300";
  return (
    <section className="bg-white dark:bg-slate-950 dark:border-t-2 dark:border-slate-800 py-10 lg:py-20">
      <div className="px-5 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Flexible Coaching Options
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">
            Our Pricing Plans
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-7">
            Choose the level of coaching and support that best fits your goals,
            lifestyle, and training experience.
          </p>
        </div>

        {/* Static Billing Toggle */}
        <div className="flex justify-center mb-10 lg:mb-14">
          <div className="inline-flex items-center bg-slate-100 dark:bg-slate-900 rounded-full p-1">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`${toggleBase} ${
                billingPeriod === "monthly"
                  ? "bg-green-600 text-white dark:text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              className={`${toggleBase} ${
                billingPeriod === "yearly"
                  ? "bg-green-600 text-white dark:text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 items-start gap-8">
          {/* Price Card */}

          {pricingPlans.map((price) => (
            <PricingCard
              key={price.id}
              price={price}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
