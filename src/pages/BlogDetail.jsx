import { Link, useParams } from "react-router";
import blogs from "../data/blogs";
import { FaArrowLeft, FaCalendarDays, FaClock, FaUser } from "react-icons/fa6";
import blog1 from "../assets/images/blog-1.jpg";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-5">
          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-8"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>

          {/* Category */}
          <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
            {blog.category}
          </p>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <span className="flex items-center gap-2">
              <FaCalendarDays />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <FaClock /> {blog.readTime}
            </span>

            <span className="flex items-center gap-2">
              <FaUser />
              {blog.author}
            </span>
          </div>

          {/* Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[350px] lg:h-[500px] object-cover rounded-3xl mb-10"
          />

          {/* Article content */}
          <article className="text-slate-600 dark:text-slate-300 text-lg leading-8 space-y-6">
            <p>{blog.content}</p>

            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 pt-4">
              Start With Simple Actions
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {blog.actionLists.map((actionList, index) => (
                <li key={index}>{actionList}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
