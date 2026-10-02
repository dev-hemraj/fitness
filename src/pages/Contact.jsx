import { useState } from "react";
import { contactInfo } from "../data/contactInfo";
import { FaEnvelope, FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsSending(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSuccessMessage("Message sent successfully ✅");
      setIsSending(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPlan("");
      setGoal("");
      setMessage("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      setErrorMessage("Something went wrong. Please try again.");
      setIsSending(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            Let&apos;s Get Started
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Start Your Fitness Journey
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            Tell us about your goals and the type of support you&apos;re looking
            for. Our coaching team will help you find the right next step.
          </p>
        </div>
      </section>

      {/* Contact Area */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left Side */}
            <div className="lg:col-span-2">
              <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                Contact Us
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-5">
                Ready to Work Toward Your Goals?
              </h2>

              <p className="text-slate-500 dark:text-slate-400 leading-8 mb-8">
                Whether you&apos;re just getting started or looking for more
                focused coaching, send us a message and we&apos;ll help you
                choose the right training option.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-5">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">
                      Email
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-5">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">
                      Phone
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-5">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center">
                    <FaLocationDot />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">
                      Location
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-5">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-green-600 text-white dark:text-slate-950 flex items-center justify-center">
                    <FaClock />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">
                      Opening Hours
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      {contactInfo.openingHours.days}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400">
                      {contactInfo.openingHours.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-slate-100 mb-3">
                    Send Us a Message
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400">
                    Fill in the form below and tell us a little about what
                    you&apos;d like to achieve.
                  </p>
                </div>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="08483920-f4dc-4ba8-947d-0bada5747133"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        First Name
                      </label>

                      <input
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                      />
                      <span className="text-red-500 text-sm ">
                        {errorMessage}
                      </span>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Last Name
                      </label>

                      <input
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        type="text"
                        id="lastName"
                        placeholder="Carter"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                      />
                      <span className="text-red-500 text-sm ">
                        {errorMessage}
                      </span>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Phone Number
                      </label>

                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        type="tel"
                        id="phone"
                        placeholder="+1 234 567 890"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                      />
                    </div>
                  </div>

                  {/* Plan */}
                  <div className="mt-5">
                    <label
                      htmlFor="plan"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Interested Plan
                    </label>

                    <select
                      required
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      name="plan"
                      id="plan"
                      defaultValue=""
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                    >
                      <option value="" disabled>
                        Select a plan
                      </option>

                      <option value="starter">Starter Coaching</option>
                      <option value="premium">Premium Coaching</option>
                      <option value="elite">Elite Transformation</option>
                    </select>
                  </div>

                  {/* Goal */}
                  <div className="mt-5">
                    <label
                      htmlFor="goal"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Main Fitness Goal
                    </label>

                    <select
                      required
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      name="goal"
                      id="goal"
                      defaultValue=""
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition"
                    >
                      <option value="" disabled>
                        Select your goal
                      </option>

                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Build Muscle</option>
                      <option value="strength">Improve Strength</option>
                      <option value="fitness">General Fitness</option>
                      <option value="mobility">Mobility & Flexibility</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Tell Us About Your Goals
                    </label>

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Tell us about your current fitness level, goals, or anything you'd like your coach to know..."
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:border-green-600 transition "
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full mt-6 bg-green-600 text-white dark:text-slate-950 rounded-full px-6 py-3.5 font-bold hover:-translate-y-1 transition duration-300 cursor-pointer"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>

                  {successMessage && (
                    <p className="text-sm text-green-800 dark:text-green-400 text-center mt-4 border py-2 rounded-xl">
                      {successMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-10 lg:px-12 lg:py-14 text-center">
            <p className="text-green-100 dark:text-slate-900 font-semibold mb-3">
              Not Sure Which Plan Is Right?
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-4">
              We&apos;ll Help You Choose
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8">
              Tell us about your goals and experience level, and our team can
              recommend the coaching option that fits you best.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
