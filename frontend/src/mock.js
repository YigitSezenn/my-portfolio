// Mock data for portfolio - will be replaced with real GitHub API data later

export const mockProjects = [
  {
    id: 1,
    name: "mobile-test-automation",
    description: "Automated testing framework for mobile applications using Appium and Jest",
    html_url: "https://github.com/YigitSezenn/mobile-test-automation",
    language: "JavaScript",
    stargazers_count: 12,
    forks_count: 3,
    topics: ["automation", "testing", "mobile", "appium"]
  },
  {
    id: 2,
    name: "qa-utils",
    description: "Collection of utility functions and helpers for QA testing workflows",
    html_url: "https://github.com/YigitSezenn/qa-utils",
    language: "Python",
    stargazers_count: 8,
    forks_count: 2,
    topics: ["qa", "testing", "utilities"]
  },
  {
    id: 3,
    name: "react-native-todo",
    description: "Simple todo app built with React Native for learning mobile development",
    html_url: "https://github.com/YigitSezenn/react-native-todo",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    topics: ["react-native", "mobile", "todo"]
  },
  {
    id: 4,
    name: "selenium-boilerplate",
    description: "Boilerplate project for web automation testing with Selenium WebDriver",
    html_url: "https://github.com/YigitSezenn/selenium-boilerplate",
    language: "Java",
    stargazers_count: 15,
    forks_count: 4,
    topics: ["selenium", "automation", "testing"]
  },
  {
    id: 5,
    name: "api-test-suite",
    description: "Comprehensive API testing suite with Postman and Newman integration",
    html_url: "https://github.com/YigitSezenn/api-test-suite",
    language: "JavaScript",
    stargazers_count: 6,
    forks_count: 1,
    topics: ["api", "testing", "postman"]
  },
  {
    id: 6,
    name: "flutter-weather",
    description: "Weather application built with Flutter for cross-platform mobile development",
    html_url: "https://github.com/YigitSezenn/flutter-weather",
    language: "Dart",
    stargazers_count: 10,
    forks_count: 2,
    topics: ["flutter", "mobile", "weather"]
  }
];

export const mockProfile = {
  name: "Süleyman Yiğit",
  login: "YigitSezenn",
  bio: "QA Engineer & Jr Mobile Developer passionate about building quality software and automated testing solutions.",
  avatar_url: "https://github.com/YigitSezenn.png",
  public_repos: 12,
  followers: 25,
  html_url: "https://github.com/YigitSezenn"
};

export const skills = [
  { name: "Mobile Testing", category: "QA" },
  { name: "Automation", category: "QA" },
  { name: "Selenium", category: "QA" },
  { name: "Appium", category: "QA" },
  { name: "React Native", category: "Development" },
  { name: "Flutter", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "Python", category: "Development" },
  { name: "Java", category: "Development" },
  { name: "API Testing", category: "QA" },
  { name: "CI/CD", category: "DevOps" }
];
