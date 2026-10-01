import { Link } from "react-router";
import { FaArrowRight, FaCalendarDays, FaClock, FaUser } from "react-icons/fa6";
const BlogCard = ({ blog }) => {
  return (
    <article className="group bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
          {blog.category}
        </span>

        <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-2 mb-3">
          {blog.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 leading-7 mb-5 line-clamp-2">
          {blog.content}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-5">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        <Link
          to="#"
          className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold"
        >
          Read More
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
