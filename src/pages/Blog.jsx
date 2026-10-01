import blogs from "../data/blogs";
import { Link } from "react-router";
import { FaArrowRight, FaCalendarDays, FaClock, FaUser } from "react-icons/fa6";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const featuredBlog = blogs.find((blog) => blog.featured === true);
  const normalBlogs = blogs.filter((blog) => blog.featured !== true);
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 dark:bg-slate-900 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            ReactFit Blog
          </p>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-5">
            Fitness Tips, Training & Healthy Habits
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-8">
            Practical advice to help you train smarter, stay consistent, and
            make better decisions for your fitness journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden">
            <div className="h-[350px] lg:h-full min-h-[450px]">
              <img
                src={featuredBlog.image}
                alt="Strength training"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 lg:p-12">
              <span className="inline-flex bg-green-100 dark:bg-green-600/20 text-green-700 dark:text-green-400 text-sm font-bold px-3 py-1.5 rounded-full mb-5">
                Featured
              </span>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 mb-5">
                {featuredBlog.title}
              </h2>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mb-6 line-clamp-2">
                {featuredBlog.content}
              </p>

              <div className="flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400 mb-7">
                <span className="flex items-center gap-2">
                  <FaCalendarDays />
                  {featuredBlog.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaClock /> {featuredBlog.readTime}
                </span>

                <span className="flex items-center gap-2">
                  <FaUser />
                  {featuredBlog.author}
                </span>
              </div>

              <Link
                to={`/blog/${featuredBlog.slug}`}
                className="inline-flex items-center gap-2 bg-green-600 text-white dark:text-slate-950 px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition duration-300"
              >
                Read Article
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                Latest Articles
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100">
                Learn. Train. Improve.
              </h2>
            </div>

            <p className="max-w-xl text-slate-500 dark:text-slate-400">
              Explore practical articles about training, nutrition, recovery,
              consistency, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            {normalBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-green-600 rounded-3xl px-6 py-12 lg:px-14 lg:py-16 text-center">
            <p className="text-green-100 dark:text-slate-900 font-semibold mb-3">
              Keep Learning
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-slate-950 mb-5">
              Get Fitness Tips Straight to Your Inbox
            </h2>

            <p className="max-w-2xl mx-auto text-green-50 dark:text-slate-900/80 text-lg leading-8 mb-7">
              Join our community and receive practical training, nutrition, and
              recovery tips.
            </p>

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white dark:bg-slate-950 rounded-full px-5 py-3.5 text-slate-900 dark:text-slate-100 outline-none"
              />

              <button
                type="button"
                className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full px-7 py-3.5 font-bold hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
