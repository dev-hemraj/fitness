import oneOnOne from "../assets/images/one-on-one-coaching.jpg";
import groupSessions from "../assets/images/group-sessions.jpg";
import personalizedNutrition from "../assets/images/personalized-nutrition.jpg";
export const services = [
  {
    id: 1,
    title: "Personal Fitness Coaching",
    slug: "personal-fitness-coaching",
    category: "Personal Training",
    description:
      "One-to-one coaching built around your goals, fitness level, schedule, and lifestyle. Each session is designed to help you improve strength, movement, technique, and confidence while following a structured plan that adapts as you progress.",
    image: oneOnOne,
    isNew: true,
    benefits: [
      {
        title: "Personalized Plan",
        description: "Training built around your goals and fitness level.",
      },
      {
        title: "Expert Guidance",
        description: "Improve your technique with professional coaching.",
      },
      {
        title: "Progress Tracking",
        description: "Track your progress and adjust your plan as you improve.",
      },
    ],
  },

  {
    id: 2,
    title: "Small Group Training",
    slug: "small-group-training",
    category: "Group Training",
    description:
      "Train in a supportive small-group environment where you can stay motivated, challenge yourself, and enjoy the energy of training with others. Sessions combine strength, conditioning, and functional exercises while still allowing space for individual guidance.",
    image: groupSessions,
    isNew: false,
    benefits: [
      {
        title: "Group Motivation",
        description: "Stay motivated by training alongside others.",
      },
      {
        title: "Coach Support",
        description: "Get professional guidance throughout each session.",
      },
      {
        title: "Varied Workouts",
        description: "Enjoy different exercises that keep training engaging.",
      },
    ],
  },

  {
    id: 3,
    title: "Nutrition Guidance",
    slug: "nutrition-guidance",
    category: "Nutrition",
    description:
      "Build healthier eating habits with practical nutrition guidance that supports your training and lifestyle. The focus is on realistic choices, consistency, and creating a balanced approach that helps you feel better and work toward your fitness goals.",
    image: personalizedNutrition,
    isNew: true,
    benefits: [
      {
        title: "Healthy Habits",
        description: "Build realistic eating habits you can maintain.",
      },
      {
        title: "Goal Support",
        description: "Align your nutrition with your training goals.",
      },
      {
        title: "Simple Guidance",
        description: "Get practical advice without complicated meal rules.",
      },
    ],
  },

  {
    id: 4,
    title: "Strength Training",
    slug: "strength-training",
    category: "Strength",
    description:
      "Develop strength with a structured program focused on proper technique, progressive overload, and consistent improvement. Training can include compound movements, resistance exercises, and targeted work designed to increase power, stability, and overall performance.",
    image: oneOnOne,
    isNew: false,
    benefits: [
      {
        title: "Build Strength",
        description:
          "Increase strength through structured resistance training.",
      },
      {
        title: "Better Technique",
        description: "Learn safer and more effective movement patterns.",
      },
      {
        title: "Progressive Training",
        description: "Increase difficulty gradually as you improve.",
      },
    ],
  },

  {
    id: 5,
    title: "Weight Loss Coaching",
    slug: "weight-loss-coaching",
    category: "Weight Management",
    description:
      "A practical coaching approach focused on helping you lose body fat while building sustainable habits. Training, daily activity, consistency, and lifestyle changes work together to create progress without relying on extreme routines or short-term solutions.",
    image: groupSessions,
    isNew: false,
    benefits: [
      {
        title: "Sustainable Progress",
        description: "Focus on realistic changes you can maintain long term.",
      },
      {
        title: "Structured Training",
        description: "Follow workouts designed to support your goals.",
      },
      {
        title: "Better Habits",
        description: "Improve consistency with healthier daily routines.",
      },
    ],
  },

  {
    id: 6,
    title: "Muscle Building",
    slug: "muscle-building",
    category: "Body Composition",
    description:
      "Follow a progressive resistance-training program designed to support muscle growth and improve body composition. Sessions focus on exercise selection, technique, volume, recovery, and gradual progression to help you build strength and muscle over time.",
    image: personalizedNutrition,
    isNew: false,
    benefits: [
      {
        title: "Muscle Growth",
        description: "Use progressive training to support muscle development.",
      },
      {
        title: "Better Structure",
        description: "Train with a clear plan for sets, reps, and progression.",
      },
      {
        title: "Improved Strength",
        description: "Build strength while improving body composition.",
      },
    ],
  },

  {
    id: 7,
    title: "Functional Training",
    slug: "functional-training",
    category: "Functional Fitness",
    description:
      "Improve the way your body moves with training focused on strength, balance, coordination, stability, and mobility. Functional sessions are designed to support everyday movement while also helping you become stronger, more capable, and more confident.",
    image: oneOnOne,
    isNew: false,
    benefits: [
      {
        title: "Better Movement",
        description: "Improve movement quality for everyday activities.",
      },
      {
        title: "Balance & Stability",
        description: "Develop better control, balance, and coordination.",
      },
      {
        title: "Full-Body Strength",
        description: "Train movements that involve multiple muscle groups.",
      },
    ],
  },

  {
    id: 8,
    title: "Mobility & Flexibility",
    slug: "mobility-flexibility",
    category: "Mobility",
    description:
      "Work on mobility, flexibility, posture, and movement quality through controlled exercises and stretching techniques. These sessions can help you move more comfortably, improve exercise technique, and support better movement during training and daily activities.",
    image: groupSessions,
    isNew: false,
    benefits: [
      {
        title: "More Mobility",
        description: "Improve movement through a greater comfortable range.",
      },
      {
        title: "Better Flexibility",
        description: "Reduce stiffness with targeted mobility work.",
      },
      {
        title: "Improved Posture",
        description: "Support better posture and movement awareness.",
      },
    ],
  },

  {
    id: 9,
    title: "HIIT Training",
    slug: "hiit-training",
    category: "Cardio & Endurance",
    description:
      "Challenge your fitness with high-intensity interval training that combines short periods of demanding exercise with planned recovery. HIIT sessions are designed to improve cardiovascular fitness, endurance, work capacity, and overall conditioning.",
    image: personalizedNutrition,
    isNew: false,
    benefits: [
      {
        title: "Improve Endurance",
        description: "Build cardiovascular fitness and work capacity.",
      },
      {
        title: "High-Energy Workouts",
        description: "Train with fast-paced and challenging sessions.",
      },
      {
        title: "Time Efficient",
        description: "Get an effective workout in a shorter session.",
      },
    ],
  },

  {
    id: 10,
    title: "Beginner Fitness Program",
    slug: "beginner-fitness-program",
    category: "Beginner Program",
    description:
      "A supportive introduction to fitness for anyone who is new to training or returning after a break. Learn the fundamentals of movement, strength, and exercise technique while gradually building confidence, consistency, and a strong fitness foundation.",
    image: oneOnOne,
    isNew: false,
    benefits: [
      {
        title: "Learn the Basics",
        description: "Build a strong foundation with simple exercises.",
      },
      {
        title: "Train Safely",
        description: "Learn correct technique and movement patterns.",
      },
      {
        title: "Build Confidence",
        description: "Progress gradually at a comfortable pace.",
      },
    ],
  },

  {
    id: 11,
    title: "Online Coaching",
    slug: "online-coaching",
    category: "Online Training",
    description:
      "Train from anywhere with a personalized program built around your goals, equipment, and schedule. Online coaching can include structured workouts, progress tracking, regular adjustments, and ongoing guidance to help you stay consistent and accountable.",
    image: groupSessions,
    isNew: false,
    benefits: [
      {
        title: "Train Anywhere",
        description: "Follow your program from home, gym, or while traveling.",
      },
      {
        title: "Flexible Schedule",
        description: "Train at times that work best for your routine.",
      },
      {
        title: "Ongoing Support",
        description: "Receive guidance and adjustments as you progress.",
      },
    ],
  },

  {
    id: 12,
    title: "Performance Coaching",
    slug: "performance-coaching",
    category: "Performance",
    description:
      "Improve athletic performance with structured training focused on strength, speed, endurance, power, and movement quality. Programs are adapted to your current ability and goals, helping you develop the physical qualities needed for better overall performance.",
    image: personalizedNutrition,
    isNew: false,
    benefits: [
      {
        title: "Increase Power",
        description: "Develop strength and explosive movement.",
      },
      {
        title: "Improve Speed",
        description: "Train movement quality, speed, and athletic control.",
      },
      {
        title: "Better Performance",
        description: "Build the physical qualities needed for your goals.",
      },
    ],
  },
];
