import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";
import blog5 from "../assets/images/blog-5.jpg";
import blog6 from "../assets/images/blog-6.jpg";
import blog7 from "../assets/images/blog-7.jpg";
const blogs = [
  {
    id: 1,
    slug: "how-to-build-a-fitness-routine-you-can-actually-stick-to",
    title: "How to Build a Fitness Routine You Can Actually Stick To",
    category: "Training",
    date: "Sep 18, 2026",
    author: "John Carter",
    image: blog1,
    readTime: "6 min read",
    featured: true,

    content: `A successful training plan is not about doing everything perfectly. It is about creating a routine that fits your lifestyle and helps you stay consistent.

      Building a fitness routine is one of the most important steps towards achieving long-term results.

      Many people start with extreme workouts and unrealistic goals, but the best approach is creating habits that you can maintain over time.

      A successful fitness routine should fit your schedule, your current fitness level, and your personal goals.
    `,

    actionLists: [
      "Choose realistic training days",
      "Focus on exercises you enjoy",
      "Track your progress",
      "Allow time for recovery",
    ],
  },

  {
    id: 2,
    slug: "ways-to-make-strength-training-more-effective",
    title: "5 Ways to Make Your Strength Training More Effective",
    category: "Training",
    date: "Sep 12, 2026",
    author: "John Carter",
    image: blog2,
    readTime: "5 min read",
    featured: true,

    content: `Small improvements in technique, recovery, and progression can make a big difference in your strength training results.

      Strength training is not only about lifting heavier weights.

      The quality of your movement, exercise selection, recovery, and training progression all influence your results.

      Improving your technique allows you to train more efficiently while reducing unnecessary stress on your body.
    `,

    actionLists: [
      "Focus on proper exercise technique",
      "Increase weight or difficulty gradually",
      "Use controlled movements",
      "Give your body enough recovery time",
      "Track your strength progress",
    ],
  },

  {
    id: 3,
    slug: "simple-nutrition-habits-that-support-your-training",
    title: "Simple Nutrition Habits That Support Your Training",
    category: "Nutrition",
    date: "Sep 8, 2026",
    author: "John Carter",
    image: blog3,
    readTime: "7 min read",
    featured: false,

    content: `You don't need an extreme diet to support your training. Small nutrition changes can create healthier habits.

      Good nutrition supports your training performance, recovery, and energy.

      Instead of following complicated diets, focus on simple habits.
    `,

    actionLists: [
      "Eat enough protein",
      "Stay hydrated throughout the day",
      "Choose quality whole foods",
      "Build balanced meals",
      "Eat consistently around your training schedule",
    ],
  },

  {
    id: 4,
    slug: "why-recovery-is-important-after-workouts",
    title: "Why Recovery Is Just as Important as Your Workout",
    category: "Recovery",
    date: "Sep 3, 2026",
    author: "John Carter",
    image: blog4,
    readTime: "4 min read",
    featured: false,

    content: `Recovery gives your body the time it needs to adapt, rebuild, and prepare for your next training session.

      Training creates the stimulus, but recovery creates the improvement.

      Sleep, nutrition, mobility work, and rest days allow your body to repair and become stronger.

      Ignoring recovery can reduce performance and increase the risk of injury.
    `,

    actionLists: [
      "Get enough quality sleep",
      "Schedule regular rest days",
      "Stay hydrated",
      "Eat enough nutrients to support recovery",
      "Use light mobility or stretching when needed",
    ],
  },

  {
    id: 5,
    slug: "when-is-personal-coaching-worth-it",
    title: "When Is Personal Coaching Worth It?",
    category: "Coaching",
    date: "Aug 28, 2026",
    author: "John Carter",
    image: blog5,
    readTime: "6 min read",
    featured: false,

    content: `Coaching can provide structure, accountability, and guidance when you want a more focused training approach.

      Personal coaching can help people who need guidance, motivation, and a structured plan.

      A coach can help you understand exercises, create realistic goals, and adjust your training based on your progress.

      The right support can make your fitness journey more efficient.
    `,

    actionLists: [
      "Get a training plan based on your goals",
      "Improve exercise technique",
      "Stay accountable to your routine",
      "Adjust training when progress changes",
      "Receive guidance when you feel unsure",
    ],
  },

  {
    id: 6,
    slug: "how-to-stay-consistent-when-motivation-drops",
    title: "How to Stay Consistent When Motivation Drops",
    category: "Mindset",
    date: "Aug 22, 2026",
    author: "John Carter",
    image: blog6,
    readTime: "5 min read",
    featured: false,

    content: `Motivation changes from day to day. Strong habits and simple routines help you continue moving forward.

      Motivation is not always constant.

      The key to progress is creating systems and habits that continue even when motivation is low.

      Focus on small actions and remember that consistency builds confidence.
    `,

    actionLists: [
      "Keep your routine simple",
      "Set small and realistic goals",
      "Train even when motivation is low",
      "Focus on consistency instead of perfection",
      "Track small improvements over time",
    ],
  },

  {
    id: 7,
    slug: "how-to-set-fitness-goals-that-make-sense",
    title: "How to Set Fitness Goals That Actually Make Sense",
    category: "Lifestyle",
    date: "Aug 17, 2026",
    author: "John Carter",
    image: blog7,
    readTime: "6 min read",
    featured: false,

    content: `Clear and realistic goals make it easier to measure progress and stay focused on what matters.

      Setting the right goals creates direction and motivation.

      Good fitness goals should be specific, realistic, and measurable.

      Instead of focusing only on results, focus on building habits that lead to those results.
    `,

    actionLists: [
      "Set specific goals",
      "Make your goals realistic",
      "Choose measurable targets",
      "Create smaller milestones",
      "Focus on habits that support the final goal",
    ],
  },
];

export default blogs;
