import blog1 from "../assets/images/how-work.jpg";
import blog2 from "../assets/images/personalized-nutrition.jpg";
import blog3 from "../assets/images/group-sessions.jpg";

const BlogSection = () => {
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
              src={blog1}
              alt=""
              className="h-87.5 w-full object-cover rounded-2xl"
            />
            {/* small info */}
            <div className="mt-10 flex gap-2 text-slate-500">
              <p className="category font-medium dark:text-slate-300">
                Fitness Tips
              </p>
              <p className="Date font-medium">March,22,2026</p>
            </div>
            {/* Blog Title */}
            <h3 className="text-2xl font-bold dark:text-slate-300">
              Browse premium related images
            </h3>
          </article>
          {/* Blog Right */}
          {/* blog card */}
          <div className="w-full space-y-10">
            <article className="flex flex-col lg:flex-row gap-10">
              <img
                src={blog2}
                alt=""
                className=" h-87.5 lg:h-38.75 object-cover rounded-2xl w-full lg:w-1/2"
              />
              <div className="w-full lg:w-1/2">
                {/* small info */}
                <div className=" flex gap-2 text-gray-500">
                  <p className="category font-medium dark:text-slate-300">
                    Fitness Tips
                  </p>
                  <p className="Date font-medium">March,22,2026</p>
                </div>
                {/* Blog Title */}
                <h3 className="text-2xl font-bold dark:text-slate-300">
                  Browse premium related images
                </h3>
                <p className="dark:text-slate-300 mt-2">
                  Lorem ipsum dolor sit, amet consectetur...
                </p>
              </div>
            </article>
            <article className="flex flex-col lg:flex-row gap-10">
              <img
                src={blog3}
                alt=""
                className="h-87.5 lg:h-38.75  object-cover rounded-2xl w-full lg:w-1/2"
              />
              <div className="w-full lg:w-1/2">
                {/* small info */}
                <div className=" flex gap-2 text-gray-500">
                  <p className="category font-medium dark:text-slate-300">
                    Fitness Tips
                  </p>
                  <p className="Date font-medium">March,22,2026</p>
                </div>
                {/* Blog Title */}
                <h3 className="text-2xl font-bold dark:text-slate-300">
                  Browse premium related images
                </h3>{" "}
                <p className="dark:text-slate-300 mt-2">
                  Lorem ipsum dolor sit, amet consectetur...
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
