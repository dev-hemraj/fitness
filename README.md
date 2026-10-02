# ReactFit — Fitness & Wellness Website

ReactFit is a modern, responsive fitness and wellness website built with React, Tailwind CSS, and React Router.

The project includes multiple pages, reusable components, structured data, dark/light theme support, a BMI calculator, blog and service detail pages, pricing plans, coach profiles, and a fully working contact form connected with Web3Forms.

## Live Demo

https://fitness-blond-pi.vercel.app/

---

## Features

- Responsive design for desktop, tablet, and mobile
- Multi-page navigation with React Router
- Reusable React component architecture
- Fitness services and detailed service pages
- Coach profiles
- Blog listing and individual blog detail pages
- Challenges and challenge detail pages
- Monthly and yearly pricing options
- BMI calculator with dynamic BMI categories
- Functional contact form with Web3Forms
- Form validation
- Loading state while sending messages
- Success and error feedback
- Automatic form reset after successful submission
- Shared contact information across the Contact page and Footer
- Light and dark mode
- Theme preference saved with LocalStorage
- Testimonials section
- Responsive navigation
- Scroll-to-top behavior between pages
- Custom 404 page

---

## Tech Stack

- React
- JavaScript
- Tailwind CSS
- React Router
- Context API
- LocalStorage
- Web3Forms
- React Icons
- Vite
- Vercel

---

## Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── BlogCard.jsx
│   ├── CoachCard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PricingCard.jsx
│   ├── ScrollToTop.jsx
│   └── ServiceCard.jsx
│
├── data/
│   ├── blogs.js
│   ├── coaches.js
│   ├── contactInfo.js
│   ├── navLinks.js
│   ├── pricing.js
│   ├── services.js
│   ├── stats.js
│   └── testimonials.js
│
├── layouts/
│
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── BlogDetail.jsx│
│   ├── Coaches.jsx
│   ├── Contact.jsx
│   ├── FitnessCalculator.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Pricing.jsx
│   ├── ServiceDetail.jsx
│   └── Services.jsx
│
├── sections/
│   ├── BlogSection.jsx
│   ├── CoachSection.jsx
│   ├── HeroSection.jsx
│   ├── HowItWorksSection.jsx
│   ├── PricingSection.jsx
│   ├── ServicesSection.jsx
│   ├── TestimonialsSection.jsx
│   └── VideoSection.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

# About the Project

ReactFit was built as a component-based React application focused on clean structure, reusable UI, responsive design, and practical frontend functionality.
The website contains several different types of content including fitness services, coaches, pricing plans, blogs, challenges, testimonials, and fitness tools.
Instead of keeping all content directly inside components, structured data is separated into dedicated files inside the data directory. This keeps the application easier to maintain and allows multiple components to reuse the same information.

# Key Implementation Details

Reusable Components
Reusable components such as ServiceCard, CoachCard, BlogCard, and PricingCard are used throughout the application.
This helps reduce repeated JSX and keeps the UI consistent across different pages.

# Structured Data

Content such as services, coaches, pricing plans, blog posts, navigation links, statistics, testimonials, and contact information is stored separately inside the data folder.
For example, the same contact information can be reused by both the Footer and Contact page without duplicating the values.

## Project Status

The main frontend functionality is complete and the project is actively being improved as I continue learning and adding new features.

- Author
  Built by Hem Raj Bhat
  Frontend Developer
