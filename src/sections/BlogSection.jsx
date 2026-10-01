import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import blogs from "../data/blogs";

const BlogSection = () => {
  const featureBlogs = blogs.find((blog) => blog.featured === true);
  const sideBlogs = blogs.filter((blog) => !blog.featured).slice(0, 2);
  return (
    <section className=" bg-white dark:bg-slate-950 dark:border-t-2  dark:border-slate-800  py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="heading text-center mb-8 lg:mb-14 text-3xl lg:text-4xl font-bold dark:text-slate-300">
          Our Blog
        </h2>
        {/* Blog part */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* blog left part  */}
          {/* Blog card */}
          <article>
            <img
              src={featureBlogs.image}
              alt={featureBlogs.title}
              className="h-87.5 w-full object-cover rounded-2xl"
            />
            {/* small info */}
            <div className="mt-10 flex gap-2 text-slate-500">
              <p className="category font-medium dark:text-slate-300">
                {featureBlogs.category}
              </p>
              <p className="Date font-medium">{featureBlogs.date}</p>
            </div>
            {/* Blog Title */}
            <h3 className="text-2xl font-bold dark:text-slate-300 line-clamp-1">
              {featureBlogs.title}
            </h3>
            <Link
              to={`/blog/${featureBlogs.slug}`}
              className="inline-flex items-center gap-2 mt-3 text-green-600 dark:text-green-400 font-bold"
            >
              Read More
              <FaArrowRight />
            </Link>
          </article>
          {/* Blog Right */}
          {/* blog card */}
          <div className="w-full space-y-10">
            {sideBlogs.map((sideBlog) => (
              <article
                className="flex flex-col lg:flex-row gap-10"
                key={sideBlog.title}
              >
                <img
                  src={sideBlog.image}
                  alt={sideBlog.title}
                  className=" h-87.5 lg:h-38.75 object-cover rounded-2xl w-full lg:w-1/2"
                />
                <div className="w-full lg:w-1/2">
                  {/* small info */}
                  <div className=" flex gap-2 text-gray-500">
                    <p className="category font-medium dark:text-slate-300">
                      {sideBlog.category}
                    </p>
                    <p className="Date font-medium">{sideBlog.date}</p>
                  </div>
                  {/* Blog Title */}
                  <h3 className="text-2xl font-bold dark:text-slate-300 line-clamp-1">
                    {sideBlog.title}
                  </h3>
                  <p className="dark:text-slate-300 mt-2 line-clamp-1">
                    {sideBlog.content}
                  </p>
                  <Link
                    to={`/blog/${sideBlog.slug}`}
                    className="inline-flex items-center gap-2 mt-3 text-green-600 dark:text-green-400 font-bold"
                  >
                    Read More
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
