import { useState } from "react";
import { FaRulerVertical, FaWeightScale, FaHeartPulse } from "react-icons/fa6";

const FitnessCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleCalculateBmi = () => {
    const heightMeters = height / 100;
    const BMI = (weight / (heightMeters * heightMeters)).toFixed(1);
    console.log(BMI);
  };
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Fitness Tools
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Fitness Calculator
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            Get a quick overview of your BMI and basic fitness information using
            your height and weight.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                  Your Information
                </p>

                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100">
                  Enter Your Details
                </h2>
              </div>

              <form>
                {/* Height */}
                <div className="mb-5">
                  <label
                    htmlFor="height"
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Height
                  </label>

                  <div className="relative">
                    <FaRulerVertical className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

                    <input
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      type="number"
                      id="height"
                      placeholder="175"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-11 pr-16 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      cm
                    </span>
                  </div>
                </div>

                {/* Weight */}
                <div className="mb-5">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Weight
                  </label>

                  <div className="relative">
                    <FaWeightScale className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

                    <input
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      type="number"
                      id="weight"
                      placeholder="70"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-11 pr-16 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      kg
                    </span>
                  </div>
                </div>

                {/* Age */}
                <div className="mb-5">
                  <label
                    htmlFor="age"
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Age
                  </label>

                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    id="age"
                    placeholder="30"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                  />
                </div>

                {/* Gender */}
                <div className="mb-6">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Gender
                  </label>

                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id="gender"
                    defaultValue=""
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculateBmi}
                  type="button"
                  className="w-full bg-green-600 text-white dark:text-slate-950 rounded-full px-6 py-3.5 font-bold hover:-translate-y-1 transition duration-300 cursor-pointer"
                >
                  Calculate
                </button>
              </form>
            </div>

            {/* Result */}
            <div>
              <div className="bg-green-600 rounded-3xl p-7 lg:p-10 mb-6">
                <div className="h-14 w-14 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl mb-6">
                  <FaHeartPulse />
                </div>

                <p className="text-green-100 font-semibold mb-2">
                  Your BMI Result
                </p>

                <h2 className="text-5xl lg:text-6xl font-black text-white mb-3">
                  22.9
                </h2>

                <p className="text-xl font-bold text-white mb-4">
                  Healthy Range
                </p>

                <p className="text-green-50 leading-7">
                  Your result will appear here after you enter your information
                  and calculate your BMI.
                </p>
              </div>

              {/* BMI Range */}
              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-6">
                  BMI Categories
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="text-slate-600 dark:text-slate-300">
                      Underweight
                    </span>

                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      Below 18.5
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="text-slate-600 dark:text-slate-300">
                      Healthy
                    </span>

                    <span className="font-bold text-green-600 dark:text-green-400">
                      18.5 - 24.9
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="text-slate-600 dark:text-slate-300">
                      Overweight
                    </span>

                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      25 - 29.9
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600 dark:text-slate-300">
                      Obesity
                    </span>

                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      30+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-7 lg:p-10">
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-4">
              What Is BMI?
            </h2>

            <p className="text-slate-500 dark:text-slate-400 leading-8">
              Body Mass Index (BMI) is a simple calculation based on height and
              weight. It can provide a general indication of weight category,
              but it does not measure body composition or overall health.
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-5">
              This calculator is intended for general informational purposes and
              should not replace professional medical advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FitnessCalculator;
