import { LuClock7 } from "react-icons/lu";
import { IoRocketSharp } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";

export const pricingPlans = [
  {
    id: 1,
    name: "Starter Coaching",
    badge: "Best for beginners",
    description:
      "Simple guidance and accountability to help you build a consistent fitness routine.",
    icon: LuClock7,

    price: {
      monthly: 29,
      yearly: 348,
    },

    features: [
      "Weekly fitness guidance",
      "Personalized workout recommendations",
      "Basic nutrition support",
      "Progress tracking tools",
    ],

    featured: false,
  },

  {
    id: 2,
    name: "Premium Coaching",
    badge: "Most Popular",
    description:
      "Personalized one-on-one coaching with a plan built around your goals and progress.",
    icon: IoRocketSharp,

    price: {
      monthly: 99,
      yearly: 1188,
    },

    features: [
      "One-on-one coaching sessions",
      "Custom workout programs",
      "Detailed meal strategies",
      "Direct coach support",
      "Monthly progress reviews",
      "Priority scheduling",
    ],

    featured: true,
  },

  {
    id: 3,
    name: "Elite Transformation",
    badge: "Complete transformation",
    description:
      "High-level coaching for clients who want complete fitness, nutrition, and lifestyle support.",
    icon: FaGripfire,

    price: {
      monthly: 159,
      yearly: 1908,
    },

    features: [
      "Full lifestyle assessment",
      "Advanced fitness programming",
      "Nutrition and habit coaching",
      "Weekly progress reviews",
      "Priority coach access",
      "Long-term transformation support",
    ],

    featured: false,
  },
];
